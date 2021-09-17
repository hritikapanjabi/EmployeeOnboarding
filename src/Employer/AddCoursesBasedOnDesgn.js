
import React ,{Fragment,useState, useEffect}  from 'react'
//import '../../css/AddBasedOnDesg.css'

import axios from 'axios';
import assign from './assign.png'


function AddCourseBasedOnDesgn() {
  const a='fixed' 
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8089/api/courses/')
          .then(res=>setData(res.data))
            //console.log(res.data)
          },[a]);
    console.log(data)
    const [formData, setFormData]=useState({
      designation:""
      })
       
      const [checkedItems, setCheckedItems] = useState({}); //plain object as state

      const handleChange = (e) => {
          // updating an object instead of a Map
          setCheckedItems({...checkedItems, [e.target.value] : e.target.checked });
          console.log(checkedItems)
      }
    
      var courses=[]
       
    
      const {designation} = formData;
      
      const onChange = (e) => setFormData({
        
        designation: e.target.value

      })
      
      for(var i=0;i<data.length;i++){
        // console.log(data[i])
        // console.log( data[i].courseId)
        // console.log( data[i].courseName)
           var row=  <div> 
          <input type="checkbox" id="checkbox" name={data[i].courseId}
           key={data[i].courseId} value={data[i].courseId} checked={checkedItems[data[i].courseId]}
           onChange= {handleChange}/>  {data[i].courseName}</div>
           
          courses.push(row) 
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
           courseId: submitIds,designation
        }
          const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
          const body =assignCourses;
          console.log(body)
          const res = axios.put('http://localhost:8089/api/UpdateCoursesByDesignation',body,config)
          console.log(res)
          alert("Assigned Successfully!!")
        
        setFormData({
            courseId:[],
            designation:""
            
        })
      }
    

    return (
      <section class="" id="tasks">
      <div class="container">
                     <div class="row" >
         <div class="col-sm-7 mb-5  " style={{border:"1"}}>
         <br/><br/>
         <div style={{margin:30}}><h1>Assign Courses for Chapters</h1></div>
            <form class="form" onSubmit={e=>onSubmit(e)}>
<label class = "mainText">Select Chapter Type:</label>
            <select style={{margin: 10}} value={designation} onChange= {e=>onChange(e)} 
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
            
              <div class="courses">  
            <label class = "maintext">Select Courses:</label>
                
                  
            {courses}


                </div>   
               
                
                <button style={{margin: 10}} type="submit">Assign</button>
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

export default AddCourseBasedOnDesgn