import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Contact () {
  const navigate = useNavigate();

  const [firstname,setFirstname]=useState();
  const [lastname,setLastname]=useState();  
  const [emailcategory,setEmailcategory]=useState("ERP"); 
  const source = "Admin add";
  const [emailaddress,setEmailaddress]=useState();
  const company = "Tech curve";
  const [phone,setPhone]=useState();
  const [register,setRegister]=useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let store ={firstname,lastname,emailcategory,emailaddress,company,source,phone,register};
    fetch('http://localhost:3001/table',{
     method:("POST"),
      headers:{"content-type":"Application/json"},
      body:JSON.stringify(store)
      }).then((res)=>{
        alert('contact successfull')
        navigate('/')
      }).catch((err)=>{
        alert('failed:'+ err.message)
      })
      }

  return (
  
      <div className="container my-2">
       <div className="row my-2">
          <div className="col text-center"><h3>Contact</h3></div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col-2">First Name </div>
          <div className="col-4"><input  type='text' className='form-control' required onChange={(e)=>setFirstname(e.target.value)}/></div>
          <div className="col-2">Email Category</div>
          <div className="col-4">
            <select  type='text' className='form-control' onChange={(e)=>setEmailcategory(e.target.value)} required>
            <option>ERP</option>
            <option>CRM</option>
            <option>CLOUD</option> 
            <option>SERVER</option> 
            <option>VMS</option> 
            <option>SAP</option>
            </select>
            </div>
        </div>
        <div className="row my-2">
          <div className="col-2">Last Name</div>
          <div className="col-4"><input  type='text' className='form-control' required onChange={(e)=>setLastname(e.target.value)} /></div>
          <div className="col-2">Source</div>
          <div className="col-4"><input  type='text' className='form-control' value={source} placeholder='source' disabled /></div>  
        </div>
        <div className="row my-2">
          <div className="col-2">Email Address</div>
          <div className="col-4"><input  type='email' className='form-control' required  onChange={(e)=>setEmailaddress(e.target.value)}/></div>
          <div className="col-2">Company</div>
          <div className="col-4"><input  type='text' className='form-control' required value={company}  disabled /></div>
        </div>
        <div className="row my-2">
          <div className="col-2">Phone No</div>
          <div className="col-4"><input  type='number' className='form-control'  onChange={(e)=>setPhone(e.target.value)} required/></div>
          <div className="col-2">Register Date</div>
          <div className="col-4"><input  type='date' className='form-control' onChange={(e)=>setRegister(e.target.value)} /></div>
        </div>
        <div className="row my-3">
          <div className="col-4"></div>
          <div className="col-2"><input  type='Submit' className='form-control bg-success' value={'Save'}/></div>
          <div className="col-2"><input className='form-control bg-danger' type='button' value={'Cancel'}  onClick={()=> navigate('/')}/></div>
  
        </div>
        </form>
      </div>

  )
}
