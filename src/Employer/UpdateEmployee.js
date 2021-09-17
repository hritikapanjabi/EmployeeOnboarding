import React ,{Fragment,useState, useEffect}  from 'react'

//import '../../css/addEmployee.css'
import axios from 'axios';
import { useParams } from 'react-router';

import update from './update.png'

function UpdateEmployee() {
  const emp=useParams();
  //console.log(emp);
  var employee;
  const [formData, setFormData]=useState({
    empId:"",
    emailID:"",
    dateOfJoining:null,
    designation:""
  })
  useEffect(()=>{
  axios.get('http://localhost:8089/api/employees/')
        .then(res=>{
            console.log(res);
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].empId==emp.id){
                   employee = res.data[i]; 
                   break;
                }
            }
            setFormData({
              empId:employee.empId,
              emailID:employee.emailID,
              dateOfJoining:employee.dateOfJoining,
              designation:employee.designation
            })
            
        })
        .catch(error=>{
            console.log(error);
    });
  },[emp.id]);
 
    console.log(employee) 
      const {empId,emailID,dateOfJoining,designation} = formData;
      
      const onChange = (e) => setFormData({
        
        ...formData, [e.target.name]: e.target.value,
      })

      const onSubmit= e=>{
        e.preventDefault();
          const newUser={
            empId,emailID,dateOfJoining,designation
        }
    
      
        
    
          const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
          //const body= JSON.stringify(newUser)
          const body = newUser;
          console.log(body)
          const res = axios.put('http://localhost:8089/api/UpdateEmployeeById',body,config)
          //console.log(res)
          alert("Updated Successfully")
        
        setFormData({
            empId:"",
            emailID:"",
            dateOfJoining:"",
            designation:""
            
        })
      }
    return (
      <section class="" id="tasks">
      <div class="container">
                     <div class="row">
         <div class="col-sm-6 mb-5  ">
         <br/><br/>
         
         <div style={{margin:10}}><h1>Update Employee</h1></div>
        <form class="form" onSubmit={e=>onSubmit(e)}>
             <label >Employee ID</label>
             <input
                style={{marginLeft:25, width:"250px"}}
                type="text"
                className="employeeId form-control-sm"
                placeholder="Employee ID"
                name="empId"
                value={empId}
                onChange= {e=>onChange(e)}
              /><br/><br/>
            <label>Email Address</label>
            <input style={{marginLeft: 15,width:"250px"}} type="email" className="emailAdd form-control-sm" placeholder="email Address" 
            name="emailID" value={emailID} onChange= {e=>onChange(e)} required/><br/><br/>
            <label>Date of Joining</label>
            <input  style={{marginLeft: 11,width:"250px"}} type="date" placeholder="dateOfJoining" className="form-control-sm"
            name="dateOfJoining" value={dateOfJoining} onChange= {e=>onChange(e)}/><br/><br/>
            <label>Chapter Type</label>
            <select style={{marginLeft: 22,width:"250px"}} placeholder="Chapter Type"
                name="designation"
                className="form-control-sm"
                value={designation}
                onChange= {e=>onChange(e)}>
              <option>Sales</option>
              <option>Support</option>
              <option>Training</option>
              <option>Networking</option>
              <option>IT</option>
            </select><br/><br/>
            
            <button style={{margin: 0}} type="submit">Update</button>
        </form>
                 
                   
             </div>
             <div class="col-sm-6 mb-5">
             
                      
        
                 <div >
          <a className="navbar-brand text-white"  href="#"
          ><img className="task" style={{ width: "100%", height:"100%" }} src={update}/></a>
                      </div>
                  
             </div>
            
           
         </div>   
      </div>   
    </section> 
    )
}

export default UpdateEmployee