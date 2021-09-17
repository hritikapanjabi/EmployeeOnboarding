import React ,{Fragment,useState, useEffect}  from 'react'

import axios from 'axios';
import addtask from './addtask.png'



function AddToDo() {
    const [formData, setFormData]=useState({
        
        toDoId:"",
        toDo:"",
        estDateOfCompletion:"",
        summary:"",
        mandatory:""
      })
    
      const {toDoId,toDo,estDateOfCompletion,summary,mandatory} = formData;
      
      const onChange = (e) => setFormData({
        
        ...formData, [e.target.name]: e.target.value,
      })
    
      const onSubmit= e=>{
        e.preventDefault();
          console.log(formData)
          const newToDo={
            toDoId,toDo,estDateOfCompletion,summary,mandatory
        }

      
        
    
          const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
          //const body= JSON.stringify(newUser)
          const body = newToDo;
          const res = axios.post('http://localhost:8089/api/onboarding',body,config)
          console.log(res)
          alert("Added Successfully")
    
        
        setFormData({
            toDoId:"",
        toDo:"",
        estDateOfCompletion:"",
        summary:"",
        mandatory:""
            
        })
      }


    return (
      <section class="" id="tasks">
      <div class="container">
                     <div class="row" >
         <div class="col-sm-7 mb-5  " style={{border:"1"}}>
         <br/><br/>
         <div style={{margin:10}}>
         <h1 >Add New ToDo</h1></div>
          <form class="form" onSubmit={e=>onSubmit(e)}>
          <label>ToDo ID:</label>
          <input style={{marginLeft: 50}} type="text" placeholder="ToDo ID" 
          className="form-control-sm"
              name="toDoId" value={toDoId} onChange= {e=>onChange(e)} required/><br/><br/>
              
              <label >ToDo Name:</label>
              <input style={{marginLeft: 28}} type="text" className="secondTextbox form-control-sm"  placeholder="ToDo Name" 
              name="toDo" value={toDo} onChange= {e=>onChange(e)} required/><br/><br/>
              <label>Summary</label>
              <input className="textarea form-control-sm" placeholder="Summary" 
              name="summary" value={summary} onChange= {e=>onChange(e)} required/><br/><br/>
              <label>Due date for Completion</label>
              <input style={{marginLeft: 25}} type="date" 
              className="form-control-sm"
              name="estDateOfCompletion" value={estDateOfCompletion} onChange= {e=>onChange(e)} required/><br/><br/>
              <label>Is this a Mandatory Task</label> &nbsp; &nbsp;
              <input  style={{marginLeft:25}} type="radio" name="mandatory" value={true} onChange= {e=>onChange(e)} required/> Yes &nbsp; &nbsp;
              <input  style={{marginLeft: 10}} type="radio" name="mandatory" value ={false} onChange= {e=>onChange(e)} required/> No<br/><br/>
              <button style={{margin: 0}} type="submit">Add</button>
          </form>
                 
                   
             </div>
             <div class="col-sm-5 mb-5">
             
                      
        
                 <div >
          <a className="navbar-brand text-white"  href="#"
          ><img className="task" style={{ width: "600px", height:"500px" }} src={addtask}/></a>
                      </div>
                  
             </div>
            
           
         </div>   
      </div>   
    </section> 
       
    )
}

export default AddToDo