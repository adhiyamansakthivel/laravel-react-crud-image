import { useState } from "react";
import { useNavigate } from "react-router-dom";
import https from '../https'

export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        https.post('/employee',inputs).then((res)=>{
            console.log(res)
           
            navigate('/');
        })
    }
    return (
        <div>
            <h2>New User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                    
                        <label>Employee Photo</label>
                        <input type="file" name="photos" className="form-control mb-2"
                           onChange={handleChange}
                        />
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />

                        <label>Employee ID</label>
                        <input type="text" name="empid" className="form-control mb-2"
                            value={inputs.empid || ''}
                            onChange={handleChange}
                             />
                    
                   


                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>

    )
}