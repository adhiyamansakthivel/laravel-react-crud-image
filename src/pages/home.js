import {useState, useEffect} from "react";
import https from "../https";
import { Link } from "react-router-dom";


export default function Home(){
    
    const [empData, setEmployees] = useState([]);

    useEffect(()=>{
        fetchAllEmployees();
    },[]);

    const fetchAllEmployees = () => {
        https.get('/employee').then(res=>{
            setEmployees(res.data.employees);
        })
    }

    const deleteEmployee = (id) => {
        https.delete('/employee/'+id).then(res=>{
            fetchAllEmployees();
        })
    }
    
    return(
        <div>
            <h2>Employees Listing</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Employee Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map((employee, index)=>(
                        <tr  key={index}>
                            <td>{++index}</td>
                            <td><Link to={{ pathname: "/editimage/" + employee.id }}>
                                <img src={`http://localhost:8000/empImage/${employee.profilepic}`} className="rounded-circle" style={{width: "50px", height:"50px"}}
                                alt={employee.name} /></Link>
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.empid}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + employee.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + employee.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteEmployee(employee.id)}}
                                    >Delete</button>
                            </td>
                        </tr>

                    ))
                    }
                    
                </tbody>

            </table>
        </div>
    )
}