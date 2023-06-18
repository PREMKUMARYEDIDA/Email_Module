import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';

export default function Datatable() {
    const [Users, setUsers] = useState();
    const [Filterdata, setFilterdata] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch("http://localhost:3001/table").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setUsers(resp);
        }).catch((err)=>{
            alert("Userdetails Failed due to : " + err.message)
        });
    },[]);

    const columns = [
        {
            name : "Email",
            selector : row => row.emailaddress,
            sortable : true
        },
        {
            name : "First Name",
            selector : row => row.firstname,
            sortable : true
        },
        {
            name : "Last Name",
            selector : row => row.lastname,
            sortable : true
        },
        {
            name : "Phone",
            selector : row => row.phone,
            sortable : true
        },
        {
            name : "Email Category",
            selector : row => row.emailcategory,
            sortable : true
        },
        {
            name : "Register Date",
            selector : row => row.register,
            sortable : true
        }

    ]
    
const handleFunction = (e)=>{
    const newData = Users.filter(row =>{
        return row.emailcategory.includes(e.target.value)
    })
    setFilterdata(newData);
    
}

  return (
    <div className='container-fluid'>
        <div className='container-fluid my-3 d-flex justify-content-between'>
          <select className='btn border text-start' onChange={handleFunction} >
            <option value={""}>Filter By Email Category</option>
            <option>ERP</option>
            <option>CRM</option>
            <option>CLOUD</option> 
            <option>SERVER</option> 
            <option>VMS</option> 
            <option>SAP</option>
          </select>
            <button className='btn btn-primary' onClick={()=> navigate('/contact')}>IMPORT CONTACT</button>
          </div>
        <DataTable 
        columns={columns}
        data={(Filterdata === "" ) ? Users : Filterdata}
        selectableRows
        fixedHeader
        pagination
        ></DataTable>
    </div>
  )
}
