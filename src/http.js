import axios from 'axios';
export default axios.create({
    baseURL:"http://localhost:8000/api",
    headers: {
      headers:{
        "Content-type":"application/json"
      }      
    },
})