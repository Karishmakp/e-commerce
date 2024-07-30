import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Edit(props) {
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const navigate=useNavigate()
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])
  
    const handleUpadate=(e)=>{
        e.preventDefault()
        axios.put(`https://652ce883d0d1df5273efd85a.mockapi.io/demo/${id}`,{
            name:name,
            email:email,
        }).then(()=>{

        navigate("/read")
    })
}
    return (
        <>
           <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name}
    onChange={(e)=>setName(e.target.value)}
    /> 
     </div> 
   
  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input type="email"className="form-control" value={email}
    onChange={(e)=>setEmail(e.target.value)}
    
    /> 
    </div>
    
  
   
  <button type="submit"  className="btn btn-primary btn-lg"
  onClick={handleUpadate}>Update</button>
</form>
        </>
    );
}

export default Edit;