import React ,{Fragment,useState, useEffect}  from 'react'
import './empformstyle.css'
import axios from 'axios';
import { useParams } from 'react-router';
import update from './update.png'

function EmployeeForm(props) {
    const emp=props.empId;
  //console.log(emp);
  var employee;
  const [formData, setFormData]=useState({
      empId:emp,
    firstName:"",
    lastName:"",
    dob:null,
    emailID:"",
    address:""
  })
  useEffect(()=>{
  axios.get('http://localhost:8089/api/employees/')
        .then(res=>{
            //console.log(res);
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].empId==emp){
                   employee = res.data[i]; 
                   break;
                }
            }
            setFormData({
                empId:emp,
                firstName:employee.firstName,
                lastName:employee.lastName,
                dob:employee.dob,
                emailID:employee.emailID,
                address:employee.address
            })
            
        })
        .catch(error=>{
            console.log(error);
    });
  },[emp]);
 
    
      const {empId,firstName,lastName,dob,emailID,address} = formData;
      
      const onChange = (e) => setFormData({
        
        ...formData, [e.target.name]: e.target.value,
      })

      const onSubmit= e=>{
        e.preventDefault();
          const newUser={
            empId,firstName,lastName,dob,emailID,address
        }
    
      
       const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
          //const body= JSON.stringify(newUser)
          const body = newUser;
          console.log(newUser) 
          const res = axios.put('http://localhost:8089/api/UpdateEmployeeById',body,config)
          //console.log(res)
          alert("Updated Successfully!")
        
        setFormData({
            empId:emp,
            firstName:"",
            lastName:"",
            dob:null,
            emailID:"",
            address:""
            
        })
      }
    return (
      <section class="" id="tasks">
      <div class="container">
                     <div class="row">
         <div class="col-sm-6 mb-5  ">
         
         
         <div style={{margin:10}}><h1 >Update Profile</h1></div>
        <form class="form" onSubmit={e=>onSubmit(e)}>
            <label>First Name</label><br/>
            
            <input  style={{width:250}} type="text" placeholder="First Name" 
            name="firstName" value={firstName} onChange= {e=>onChange(e)} 
            className="form-control-sm" required/><br/><br/>
            <label  >Last Name</label><br/>
            <input style={{width:250}} type="text" className="secondTextbox" placeholder="Last Name" 
            className="form-control-sm" name="lastName" value={lastName} onChange= {e=>onChange(e)}/><br/><br/>
            <label>Date of birth</label><br/>
            <input type="date"   className="form-control-sm"
            name="dob" value={dob} onChange= {e=>onChange(e)}/><br/><br/>
            <label>Email Address</label><br/>
            <input type="email" placeholder="email Address"  className="form-control-sm"
            name="emailID" value={emailID} onChange= {e=>onChange(e)} required/><br/><br/>{/*this should appear auto and should be non-editable */}
            <label>Address</label><br/>
            <input className="textarea" placeholder="Street, City"  
            name="address" value={address} onChange= {e=>onChange(e)}/><br/>
           
            <button type="submit">Update</button>
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

export default EmployeeForm