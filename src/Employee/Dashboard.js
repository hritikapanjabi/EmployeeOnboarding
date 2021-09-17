import React ,{useState,useEffect}from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Table from 'react-bootstrap/Table'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import task from './task.png'; 
import { useParams } from 'react-router';
import Alert from 'react-s-alert';
import './Dashboard.css'; 
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';




  function Dashboard(props) {
   let ind=0
     let cc=0
     let a=false;
     const ab='fixed'
     console.log(props) 
     const empId= props.empId;
      const [data,setData]=useState([])
      useEffect(()=>{
        axios.get('http://localhost:8089/api/employees')
              .then(res=>setData(res.data))
                //console.log(res.data)
              },[ab]);
   
   const [todoPending, setTodoPending]=useState({})
   const [coursePending, setCoursePending]=useState({})
   
   const [courseData, setCourseData]=useState({
      cmpl:[]
    })
    
    
   useEffect(()=>{
      axios.get("http://localhost:8089/api/PendingToDoByEmpId/"+empId)
              .then(res => setTodoPending(res.data))
          },[empId]);
   useEffect(()=>{
      axios.get("http://localhost:8089/api/PendingCoursesByEmpId/"+empId)
              .then(res => setCoursePending(res.data))
          },[empId]);
   let cps=[];
   let name ="";
   for(var j=0;j<todoPending.length;j++){
      cps.push(false)
   }

      for(var i=0;i<data.length;i++){
         if(data[i].empId==empId){
         
      var onnow= data[i].onboardingProgress;
      var coursenow=data[i].completeWeightage;
      name=data[i].firstName;
      //console.log(data[i].coursesToComplete);

         }}
      //console.log(courses);

      var allpendingtodos=[]
      var allpendingcourses=[]
      
      const onChange2 =(ind)=> (e) => {
          a=e.target.checked
         // console.log(a)
         cps[ind]=a
         console.log(cps[ind])
      
         }
          const onUpdate2=(e)=>{
         e.preventDefault();
            //console.log(cps)
            for(var k=0;k<todoPending.length;k++){
               const newUser={
                  empId:empId,
                  toDo:todoPending[k].toDo,
                  todoCompletion:cps[k]
              }
              console.log(newUser)
              const config={
                    headers:{
                      "Content-Type": 'application/json'
                    }
               }
                const body = newUser;
                console.log(body)
                const res = axios.put('http://localhost:8089/api/UpdateEmployeeTodo',body,config)
                console.log(res)
 
            }
            Alert.success("Updated Successfully!!")
         
       }
      if(todoPending.length==0){
      
         var row =<h4>Hooray!! No Pending Tasks</h4>
         allpendingtodos.push(row)
     }
     else{
      
      for(var i=0;i<todoPending.length;i++){
         ind =i
         var row=   <tr id="d1">
           
         <td id="m1"><input type="checkbox" onChange={onChange2(i)} /> 
         &nbsp; &nbsp; {todoPending[i].toDo}</td> 
         </tr>
         
         allpendingtodos.push(row) 
         }
      }
      const {cmpl} = courseData;
      const onChange =(ind)=> (e) => {
         var a=e.target.value
         // console.log(cmpl)
         cmpl[ind]=a
         setCourseData({
            ...courseData
            
        })
      
         }
          const onUpdate= (ind)=>(e)=>{
         e.preventDefault();
            //console.log(cmpl)
           const newUser={
             empId:empId,
             courseName:coursePending[ind].courseName,
             completion:cmpl[ind]
         }
     
         console.log(newUser)
         const config={
               headers:{
                 "Content-Type": 'application/json'
               }
              
          }
           //const body= JSON.stringify(newUser)
           const body = newUser;
           const res = axios.put('http://localhost:8089/api/UpdateEmployeeCourses',body,config)
           console.log(res)
         
         
         
       }
       for(var i=0;i<coursePending.length;i++){
          
         var cn = coursePending[i].courseName;
         ind=i;
          cc = coursePending[i].completion;
        
         var row=  <tr id="r1"> <td>{cn}</td>
         
         <td><input type="text" name={"cmpl"+[i]} value={cmpl[i]}
          onChange= {onChange(ind)}/>
          <button class="btn btn-primary " size="sm" onClick={onUpdate(ind)} style={{marginLeft:'20px'}}>Done</button></td>
             <td>
               <ProgressBar animated now={cc} label={`${cc}%`} visuallyHidden /></td>
               </tr>
         
         allpendingcourses.push(row) 
         
      }

      
    return (
       <div>

        <section class="tsk" id="donboarding">   
         <div class="container">
         <div class="row">
              <div class="col-sm-12 col-md-12" style={{backgroundColor:"#87d4cd"}}>
                 <h3 class=" mt-4 text-secondary text-black"><EmojiPeopleIcon/>Hello {name}!!!</h3>
            </div>
            </div>
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Employee OnBoarding</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-6 mb-5">
                    <div class="card mt-4">
                        <div class="card-body">
                          <h4 class=" text-center card-title text-secondary">Overall Onboarding Percentage</h4>
                    <center>   
              <div style={{ width: "40%" }}>
                          <CircularProgressbar value={onnow} text={`${onnow}%`} />
                          </div>
                          </center>  
                       </div>
                       <div class="card-footer"><center>
                          <a href="#tasks " class="btn btn-primary text-center">Find Out More!</a></center>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-6 mb-5">
                    <div class="card mt-4">
                     <div class="card-body">
                          <h4 class="card-title text-secondary text-center">Course Completion Percentage</h4>
                          <center>   
              <div style={{ width: "40%" }}>
                          <CircularProgressbar value={coursenow} text={`${coursenow}%`} />
                          </div>
                          </center> 
                       </div>
                       <div class="card-footer"><center>
                          <a href="#courses " class="btn btn-primary ">Find Out More!</a></center>
                       </div>
                    </div>
                 </div>
                 
              </div>
        </div>
       </section>  
       <section  id="tasks">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Task To Do</h3>
               </div>
              </div>
             <div class="row">
             <div class="col-sm-6 mb-5 tsk bg-light">
                    
                        <div class="mt-4 mb-5" style={{marginLeft:'20px'}}>
                           {allpendingtodos}

                           <button class="btn btn-primary " onClick={onUpdate2} style={{marginTop:'20px'}}>Done</button>
                        </div>
                    
                     
                       
                 </div>
                 <div class="col-sm-6 mb-5">
 
                     <div >
              <a className="navbar-brand text-white"  href="#"
              ><img className="task" style={{ width: "400px", height:"250px" }} src={task}/></a>
                          </div>
                      
                 </div>
                
               
             </div>   
          </div>   
        </section> 
       
 
       <section class="tsk" id="courses">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Courses</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Course details
            </button>
            </h2>
         </div>
 
         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      
      <th>Course Name</th>
      <th>Course Completion</th>
      <th>Course Progress</th>
    </tr>
  </thead>
  <tbody>
 
  {allpendingcourses}
    
  </tbody>
</Table>
            </div>
         </div>
      </div>
      
      
      </div>
    </div> 
    </section>
 
   
   </div>
    );
    }
export default Dashboard;