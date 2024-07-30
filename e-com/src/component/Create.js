import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create(props) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState()
    const navigate=useNavigate()

    const headers ="Access-Control-Allow-Origin";

    const handleSubmit=(e)=>{
e.preventDefault();
console.log("submitted")
axios.post("https://652ce883d0d1df5273efd85a.mockapi.io/demo", {
    name:name,
    email:email,
    headers
});
navigate("/read")

 
  }
  return (
    <> 
          
<form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control"  
    value={name}
    onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email"className="form-control" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)} />
  </div>
   
  <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-lg">Submit</button>
</form>

    </>
  )
}