import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import https from '../https'

export default function Create() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [empid, setEmpid] = useState("");
   
  
    const handleSubmission = async (e) => {
      const formData = new FormData();
      formData.append("photos", selectedFile);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("empid", empid);

      https.post("/employee", formData)
      .then((result)=>{
        navigate('/');
    })
      .catch(()=>{
        alert('Error in the Code');
      });
    };
   
   
   
    return (

        <div>
            <h2>Add New Employee</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                    
                        <label>Employee Photo</label>
                        <input type="file" name="photos" className="form-control mb-2"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                               onChange={(e) => setName(e.target.value)}
                             />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Employee ID</label>
                        <input type="text" name="empid" className="form-control mb-2"
                          onChange={(e) => setEmpid(e.target.value)}
                        />
                    
                   


                        <button type="button" onClick={handleSubmission} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>



    );
}