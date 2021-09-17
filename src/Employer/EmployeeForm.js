import React ,{Fragment,useState, useEffect}  from 'react'
import './empformstyle.css'
import axios from 'axios';
import { useParams } from 'react-router';


function EmployeeForm() {
    const emp="613f0895b6f28231b9dd67f0";
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
  axios.get('http://localhost:8080/api/employees/')
        .then(res=>{
            //console.log(res);
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].empId=="613902fd4c8ee5c2ad50c398"){
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
    
      
        try{
    
          const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
          //const body= JSON.stringify(newUser)
          const body = newUser;
          console.log(newUser) 
          const res = axios.put('http://localhost:8080/api/UpdateEmployeeById',body,config)
          //console.log(res)
    
        }catch{
            console.log("error");
        }
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
        <Fragment>
            
        <div className="main2">
            <h2 style={{color:"white"}}>Update Profile</h2>
            <form class="form" onSubmit={e=>onSubmit(e)}>
                <label>First Name</label>
                <label className="secondText">Last Name</label><br/>
                <input type="text" placeholder="First Name" 
                name="firstName" value={firstName} onChange= {e=>onChange(e)} required/>
                <input type="text" className="secondTextbox" placeholder="Last Name" 
                name="lastName" value={lastName} onChange= {e=>onChange(e)}/><br/><br/>
                <label>Date of birth</label><br/>
                <input type="date"  
                name="dob" value={dob} onChange= {e=>onChange(e)}/><br/><br/>
                <label>Email Address</label><br/>
                <input type="email" placeholder="email Address" 
                name="emailID" value={emailID} onChange= {e=>onChange(e)} required/><br/><br/>{/*this should appear auto and should be non-editable */}
                <label>Address</label><br/>
                <input className="textarea" placeholder="Street, City" 
                name="address" value={address} onChange= {e=>onChange(e)}/><br/><br/>
                <label>Upload Profile Photo</label><br/>
                <input type="file"/><br/>
                <button type="submit">Update</button>
            </form>
          </div>
          </Fragment>
    )
}

export default EmployeeForm