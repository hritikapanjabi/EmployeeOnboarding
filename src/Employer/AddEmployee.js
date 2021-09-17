import React ,{Fragment,useState, useEffect}  from 'react'

import axios from 'axios';
import newemp from './newemp.png'

function AddEmployee() {
  

    const [formData, setFormData]=useState({
        
        emailID:"",
        dateOfJoining:"",
        designation:""
      })
    
      const {emailID,dateOfJoining,designation} = formData;
      
      const onChange = (e) => setFormData({
        
        ...formData, [e.target.name]: e.target.value,
      })
    
      const onSubmit= e=>{
        e.preventDefault();
          console.log(formData)
          const newUser={
            emailID,dateOfJoining,designation
        }

      
       
    
          const config={
              headers:{
                "Content-Type": 'application/json'
              }}
             
         
          //const body= JSON.stringify(newUser)
          const body = newUser;
          const res = axios.post('http://localhost:8089/api/AddEmployee',body,config);
          console.log(res);
          alert("Added Successfully")
    
        
        setFormData({
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
         
       <div style={{margin:20}}> <h1>Add New Employee</h1></div>
        <form class="form" onSubmit={e=>onSubmit(e)}>
            <label >Email Address:{" "}</label>
            <input style={{marginLeft: 15,width:"250px"}} type="email" placeholder="email Address" 
            className="emailAdd form-control-sm" 
            name="emailID" value={emailID} onChange= {e=>onChange(e)} required/>
            <br/><br/>
            <label>Date of Joining:</label>
            <input style={{marginLeft: 11,width:"250px"}} type="date" placeholder="dateOfJoining" 
            className="form-control-sm"
            name="dateOfJoining" value={dateOfJoining} onChange= {e=>onChange(e)}/>
            <br/><br/>
            <label>Chapter Type:</label>
          

                <select style={{marginLeft: 22,width:"250px"}} name="designation" value={designation} onChange= {e=>onChange(e)} 
            className="form-control-sm" required>
              <option value="" disabled selected hidden>Select your chapter type</option>
              <option value="Assurance">Assurance</option>
              <option value="Customer Marketing and Sales">Customer Marketing and Sales</option>
              <option value="Data and AI Services">Data and AI Services</option>
              <option value="Digital">Digital</option>
              <option value="Orchestration">Orchestration</option>
              <option value="Usage Cash and Billing">Usage Cash and Billing</option>
               <option value="Quality Engg and COE">Quality Engg and COE</option>
              
            </select>
              <br/><br/>
            
            <button  style={{margin: 0}} type="submit">Add</button>
        </form>
                
                 
                   
             </div>
             <div class="col-sm-6 mb-5">
             
                      
        
                 <div >
          <a className="navbar-brand text-white"  href="#"
          ><img className="task" style={{ width: "100%", height:"100%" }} src={newemp}/></a>
                      </div>
                  
             </div>
            
           
         </div>   
      </div>   
    </section> 
       
    )
}

export default AddEmployee