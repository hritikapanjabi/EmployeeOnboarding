import React ,{Fragment,useState, useEffect}  from 'react'
//import '../../css/addEmployee.css'
import axios from 'axios';
import { useParams } from 'react-router';
import update from './update.png'

function UpdateToDo() {
    const todo=useParams();
    //console.log(emp);
    var to;
    
    const [formData, setFormData]=useState({
        
        toDoId:"",
        toDo:"",
        estDateOfCompletion:null,
        summary:"",
        mandatory:""
      })
      var check,check1;
      useEffect(()=>{
        axios.get('http://localhost:8089/api/onboarding/')
              .then(res=>{
                  //console.log(res);
                  for(var i=0;i<res.data.length;i++){
                      if(res.data[i].toDoId==todo.id){
                         to = res.data[i]; 
                         break;
                      }
                  }
                  setFormData({
                    toDoId:to.toDoId,
                    toDo:to.toDo,
                    estDateOfCompletion:to.estDateOfCompletion,
                    summary:to.summary,
                    mandatory:to.mandatory
                  })
                  
              })
              .catch(error=>{
                  console.log(error);
          });
        },[todo.id]);
       
          console.log(to) 
          
      const {toDoId,toDo,estDateOfCompletion,summary,mandatory} = formData;
      check=mandatory?"checked":""
      check1=mandatory?"":"checked"
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
          const res = axios.put('http://localhost:8089/api/UpdateOnboarding',body,config)
          console.log(res)
          alert("Updated Successfully")
    
        
        setFormData({
            toDoId:"",
        toDo:"",
        estDateOfCompletion:null,
        summary:"",
        mandatory:""
            
        })
      }
    return (
      <section class="" id="tasks">
      <div class="container">
                     <div class="row">
         <div class="col-sm-6 mb-5  ">
         <br/><br/>
         <div style={{margin:10}}><h1>Update ToDo</h1></div>
         
        <form class="form" onSubmit={e=>onSubmit(e)}>
        <label>ToDo ID</label>
        <input style={{marginLeft: 50}} type="text" placeholder="ToDo ID" 
            name="toDoId" value={toDoId} onChange= {e=>onChange(e)} 
            className="form-control-sm" required/><br/><br/>
            <label >ToDo Name</label>
           
            <input style={{marginLeft: 28}} type="text" className="secondTextbox form-control-sm"  placeholder="ToDo Name" 
            name="toDo" value={toDo} onChange= {e=>onChange(e)} required/><br/><br/>
            <label>Summary</label>
            <input className="textarea form-control-sm " placeholder="Summary" 
            name="summary" value={summary} onChange= {e=>onChange(e)} required/><br/><br/>
            <label>Due date for Completion</label>
            <input style={{marginLeft: 25}} type="date" className="form-control-sm "
            name="estDateOfCompletion" value={estDateOfCompletion} onChange= {e=>onChange(e)} required/><br/><br/>
            <label>Is this a Mandatory Task</label> 
            <input style={{marginLeft: 25}} type="radio" name="mandatory" value={true} onChange= {e=>onChange(e)} checked={check} required/> Yes 
            <input  style={{margin: 10}} type="radio" name="mandatory" value ={false} onChange= {e=>onChange(e)} checked={check1}  required/> No<br/><br/>
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

export default UpdateToDo