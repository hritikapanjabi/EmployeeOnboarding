
import React ,{Fragment,useState, useEffect}  from 'react'
//import '../../css/AddBasedOnDesg.css'

import axios from 'axios';
import assign from './assign.png'



function AddToDoBasedOnDesgn() {
    
  const a='fixed' 
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8089/api/NonMandatoryOnboarding')
          .then(res=>setData(res.data))
        },[a]);
    const [formData, setFormData]=useState({
      designation:""
      })
      
      const [checkedItems, setCheckedItems] = useState({}); //plain object as state
      var todos=[]
      const handleChange = (e) => {
          // updating an object instead of a Map
          setCheckedItems({...checkedItems, [e.target.value] : e.target.checked });
          console.log(checkedItems)
      }
    
      
    
      const {designation} = formData;
      
      const onChange = (e) => setFormData({
        
        designation: e.target.value
        

      })
      
      for(var i=0;i<data.length;i++){
        // console.log(data[i])
        // console.log( data[i].courseId)
        // console.log( data[i].courseName)
           var row=  
          <div> <input type="checkbox" id="checkbox" name={data[i].toDoId}
                 key={data[i].toDoId} value={data[i].toDoId} checked={checkedItems[data[i].toDoId]}
                 onChange= {handleChange}/>
                {data[i].toDoId}  {data[i].toDo}
                </div>
           
          todos.push(row) 
        }
      const onSubmit= e=>{
        e.preventDefault();
        
         console.log(formData)
         var submitIds=[]
         
         for(var Id in checkedItems){
             if(checkedItems[Id]==true)      
           {  
             submitIds.push(Id)
           } 
         }
        
        
          const assignCourses={
           toDoId: submitIds,designation
        }
        
      
      
        
    
          const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
         
          const body =JSON.stringify(assignCourses);
          console.log(body)
          const res = axios.put('http://localhost:8089/api/UpdateTodoByDesignation',body,config)
          console.log(res)
          alert("Assigned Successfully!!")
    
        
        setFormData({
            toDoId:[],
            designation:""
            
        })
      }
    
    return (
      <section class="" id="tasks">
      <div class="container">
                     <div class="row" >
         <div class="col-sm-7 mb-5  " style={{border:"1"}}>
         <br/><br/>
         <div style={{margin:30}}><h1>Assign Tasks for Chapters</h1></div>
         
            <form class="form" onSubmit={e=>onSubmit(e)}>


               


            <label class = "mainText">Select Chapter Type</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select style={{margin: 0, width:"250px"}} value={designation} onChange= {e=>onChange(e)}
            className="form-control" required>
              <option value="" disabled selected hidden>Select your chapter type</option>
              <option value="Assurance">Assurance</option>
              <option value="Customer Marketing and Sales">Customer Marketing and Sales</option>
              <option value="Data and AI Services">Data and AI Services</option>
              <option value="Digital">Digital</option>
              <option value="Orchestration">Orchestration</option>
              <option value="Usage Cash and Billing">Usage Cash and Billing</option>
              <option value="Quality Engg and COE">Quality Engg and COE</option>
              
              
            </select>
            <br/>
                
            <label class = "maintext">Select Tasks</label>
                <div class="todod">
                  
             {todos}
                </div>   
               
                
                <button style={{margin: 0}} type="submit">Assign</button>
            </form>
                 
                   
             </div>
             <div class="col-sm-5 mb-5">
             
                      
        
                 <div >
          <a className="navbar-brand text-white"  href="#"
          ><img className="task" style={{ width: "500px", height:"500px" }} src={assign}/></a>
                      </div>
                  
             </div>
            
           
         </div>   
      </div>   
    </section> 
       
    )
}

export default AddToDoBasedOnDesgn