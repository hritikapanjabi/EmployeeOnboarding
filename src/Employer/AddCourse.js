import React ,{Fragment,useState, useEffect}  from 'react'
//import '../../css/addEmployee.css'
import axios from 'axios';
import addcourse from './addcourse.png';


function AddCourse() {
    const [formData, setFormData]=useState({
        
        courseId:"",
        courseName:"",
        courseSummary:"",
        courseWeightage:"",
        courseDueDate:""
      })
    
      const {courseId,courseName,courseSummary,courseWeightage,courseDueDate} = formData;
      
      const onChange = (e) => setFormData({
        
        ...formData, [e.target.name]: e.target.value,
      })
    
      const onSubmit= e=>{
        e.preventDefault();
          console.log(formData)
          const newCourse={
            courseId,courseName,courseSummary,courseWeightage,courseDueDate
        }

      
        
    
          const config={
              headers:{
                "Content-Type": 'application/json'
              }
             
         }
          //const body= JSON.stringify(newUser)
          const body = newCourse;
          const res = axios.post('http://localhost:8089/api/AddCourses',body,config)
          console.log(res)
          alert("Added Successfully")
    
        
        setFormData({
            courseId:"",
        courseName:"",
        courseSummary:"",
        courseWeightage:"",
        courseDueDate:""
            
        })
      }
    return (
       
      <section class="" id="tasks">
      <div class="container">
                     <div class="row">
         <div class="col-sm-7 mb-5  ">
         <br/><br/>
         
         <div style={{margin:10}}><h1  >Add New Course</h1></div>
            <form class="form"  onSubmit={e=>onSubmit(e)}>
            <label>Course ID</label>
            <input style={{marginLeft: 55, width:"250px"}} type="text" placeholder="Course ID" 
                className="form-control-sm"
                name="courseId" value={courseId} onChange= {e=>onChange(e)} required/><br/><br/>
            <label >Course Name</label>
                
                <input style={{marginLeft: 32, width:"250px"}} type="text" className="secondTextbox form-control-sm" placeholder="Course Name" 
                name="courseName" value={courseName} onChange= {e=>onChange(e)} required/><br/><br/>
                <label>Summary</label><br/>
                <input className="textarea form-control-sm" placeholder="Summary" 
                name="courseSummary" value={courseSummary} onChange= {e=>onChange(e)} required/><br/><br/>
                <label>Course Weightage</label>
                
                <input style={{marginLeft: 50, width:"250px"}} type="number" placeholder="0" className="form-control-sm"
                name="courseWeightage" value={courseWeightage} onChange= {e=>onChange(e)} required/><br/><br/>
                <label className="seconddate">Due date for completion</label>
                <input style={{margin: 10}} type="date" className="secondTextbox form-control-sm"  
                name="courseDueDate" value={courseDueDate} onChange= {e=>onChange(e)}/>
               
                <br/>
                <button style={{margin: 0}} type="submit">Add</button>
            </form>
                 
                   
             </div>
             <div class="col-sm-5 mb-5">
             <div style={{margin:30}}></div>
                      
        
                 <div >
          <a className="navbar-brand text-white"  href="#"
          ><img className="task" style={{ width: "100%", height:"100%" }} src={addcourse}/></a>
                      </div>
                  
             </div>
            
           
         </div>   
      </div>   
    </section> 
    )
}

export default AddCourse