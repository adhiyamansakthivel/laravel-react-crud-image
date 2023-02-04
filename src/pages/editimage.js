import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import https from '../https'


export default function EditImage(props) {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const [selectedFile, setSelectedFile] = useState();


    useEffect(()=>{
        fetchEmployee()
    },[]);

    const fetchEmployee= () =>{
        https.get('/employee/'+id+'/edit').then((res)=>{
            setInputs({
                profilepic:res.data.profilepic,
                name:res.data.name,
            });
        });
    }

    const submitForm =  async (e) =>{
        const formData = new FormData();
        formData.append("photos", selectedFile);
        https.post('/employee/image/'+id,formData).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div>
            <h2>Edit Employee Image</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <p>
                            <img src={`http://localhost:8000/empImage/${inputs.profilepic}`} className="rounded-circle" style={{width: "50px", height:"50px"}}
                            alt={inputs.name} />
                        </p>
                        <label>Employee Photo</label>
                        <input type="file" name="photos" className="form-control mb-2"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
             
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}