import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read(props) {
    const[data,setData]=useState([])
    function getData(){
        axios.get("https://652ce883d0d1df5273efd85a.mockapi.io/demo").then((res)=>{
            console.log(res)
            setData(res.data)
        })
        
    }
    const handledelete=(id)=>{
      axios.delete(`https://652ce883d0d1df5273efd85a.mockapi.io/demo/${id}`).then(()=>{
         getData()
      })
      
  }
  const setLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }

    useEffect(()=>{
        getData()
    },[])
  
    return (
        <>
        <table className="table">
        <thead>
          <tr>
          <th scope="col">1</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
            data.map((getdata)=>{
                return(
                    <tbody>
                    <tr>
                      <th scope="row">{getdata.id}</th>
                      <td>{getdata.name}</td>
                      <td>{getdata.email}</td>
                      <td>
                      <Link to='/edit'>
                        <button className='btn btn-success'
                        onClick={()=>setLocalStorage(
                          getdata.id,
                          getdata.name,
                          getdata.email
                        )}>Edit</button>
                      </Link>
                  </td>
                      <td><button className='btn btn-danger' onClick={()=>handledelete(getdata.id)}>Delete</button></td>
                    </tr>
                   
                  </tbody>
                )
            })
        
        }
      </table>
            
        </>
    );
}

export default Read;