import React ,{Fragment,useState, useEffect}  from 'react'
//import '../../css/addEmployee.css'
import axios from 'axios';
import { useParams } from 'react-router';
import update from './update.png'


function UpdateCourse() {
    const course=useParams();
    //console.log(emp);
    var co;
    const [formData, setFormData]=useState({
      courseId:"",
      courseName:"",
      courseSummary:"",
      courseWeightage:"",
      courseDueDate:null

    })
    useEffect(()=>{
    axios.get('http://localhost:8089/api/courses/')
          .then(res=>{
              //console.log(res);
              for(var i=0;i<res.data.length;i++){
                  if(res.data[i].courseId==course.id){
                     co = res.data[i]; 
                     break;
                  }
              }
              setFormData({
                courseId:co.courseId,
                courseName:co.courseName,
                courseSummary:co.courseSummary,
                courseWeightage:co.courseWeightage,
                courseDueDate:co.courseDueDate
              })
              
          })
          .catch(error=>{
              console.log(error);
      });
    },[course.id]);
   
      console.log(co) 
        const {courseId,courseName,courseSummary,courseWeightage,courseDueDate} = formData;
        
        const onChange = (e) => setFormData({
          
          ...formData, [e.target.name]: e.target.value,
        })
  
        const onSubmit= e=>{
          e.preventDefault();
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
            const res = axios.put('http://localhost:8089/api/UpdateCourseById',body,config)
            //console.log(res)
            alert("Updated Successfully")
          
          setFormData({
            courseId:"",
            courseName:"",
            courseSummary:"",
            courseWeightage:"",
            courseDueDate:null
              
          })
        }
    return (
<section class="" id="tasks">
          <div class="container">
                         <div class="row">
             <div class="col-sm-6 mb-5  ">
             <br/><br/>
             <div style={{margin:10}}><h1>Update Course</h1></div>
            <form class="form" onSubmit={e=>onSubmit(e)}>
            <label>Course ID</label>
            <input style={{marginLeft: 55, width:"250px"}} type="text" placeholder="Course ID" 
            className="form-control-sm"
                name="courseId" value={courseId} onChange= {e=>onChange(e)} required/><br/><br/>
            <label >Course Name</label>
               
                <input style={{marginLeft: 32, width:"250px"}} className="form-control-sm" type="text" className="secondTextbox" placeholder="Course Name" 
                name="courseName" value={courseName} onChange= {e=>onChange(e)} required/><br/><br/>
                <label>Summary</label>
                <input  className="textarea form-control-sm" placeholder="Summary" 
                name="courseSummary" value={courseSummary} onChange= {e=>onChange(e)}
                 required/><br/><br/>
                <label>Course Weightage</label>
                <input style={{marginLeft: 50, width:"250px"}} type="number" placeholder="0" 
                name="courseWeightage" value={courseWeightage} onChange= {e=>onChange(e)} 
                className="form-control-sm" required/><br/><br/>
                <label className="seconddate">Due date for completion</label>
               
                
                <input style={{marginLeft: 10}} type="date" className="secondTextbox form-control-sm"  
                name="courseDueDate" value={courseDueDate} onChange= {e=>onChange(e)}/>
                <br/>
                <button style={{margin: 0}}  type="submit">Update</button>
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

export default UpdateCourse