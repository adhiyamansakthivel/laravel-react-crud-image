import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import https from '../https'


export default function View(props) {
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        https.get('/employee/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
                empid:res.data.empid,
                profilepic:res.data.profilepic,
            });
        });
    }
    return (
        <div>
            <h2>View User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>Profile</h4>
                        <p>
                            <img src={`http://localhost:8000/empImage/${inputs.profilepic}`} className="rounded-circle" style={{width: "50px", height:"50px"}}
                            alt={inputs.name} />
                        </p>
                        <h4>Name</h4>
                        <p>{ inputs.name }</p>
                        <h4>Email</h4>
                        <p>{ inputs.email }</p>
                        <h4>Employee Id</h4>
                        <p>{ inputs.email }</p>
              
                    </div>
                </div>
            </div>
        </div>

    )
}