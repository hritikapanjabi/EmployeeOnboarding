import React,{useRef,useState,useEffect} from 'react'
import './DisplayTodos.css'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import axios from 'axios';
import AlarmIcon from '@material-ui/icons/Alarm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReportIcon from '@material-ui/icons/Report';
import { useParams } from 'react-router';

function DisplayTodos(props) {

   const [todoPending, setTodoPending]=useState({})
   const [todoDone, setTodoDone]=useState({})
   const [todoDueDate, setTodoDueDate]=useState({})
   let title=""
   let title2=""
   let title3=""
   const empId=props.empId;
   console.log(empId)
   useEffect(()=>{
      axios.get("http://localhost:8089/api/TodosDueDateThisWeek/"+empId)
              .then(res => setTodoPending(res.data))
          },[empId]);
          //console.log(todoPending[0].toDo)
   useEffect(()=>{
      axios.get("http://localhost:8089/api/DoneToDoByEmpId/"+empId)
              .then(res => setTodoDone(res.data))
          },[empId]);
   useEffect(()=>{
      axios.get("http://localhost:8089/api/TodosDueDatePassedEmp/"+empId)
              .then(res => setTodoDueDate(res.data))
          },[empId]);

   const renderTooltip = (props) => (
      
   <Tooltip id="danger-tooltip"  {...props}>
     Tasks for this week. 
  </Tooltip>);

const renderTooltip2 = (props) => (
      
   <Tooltip id="danger-tooltip"  {...props}>
     Employee has missed these tasks.
  </Tooltip>);
  const renderTooltip1 = (props) => (
      
   <Tooltip id="danger-tooltip"  {...props}>
      Employee has completed these tasks.
  </Tooltip>);
  
  var allpending=[]
  var allDone=[]
  var allmissed=[]
  if(todoPending.length==0){
      
      var row =<h4>No Pending Tasks</h4>
      allpending.push(row)
  }
  else{
   
   for(var i=0;i<todoPending.length;i++){
     title="Tasks for this week"
      var row=   <tr id="d1">
      <td id="m1"><AlarmIcon/> &nbsp; &nbsp; {todoPending[i].toDo}</td> 
      </tr>
      
      allpending.push(row) 
   }
  }

  if(todoDone.length==0){
      
   var row =<h4>Nothing to show</h4>
   allDone.push(row)
   }
   else{

   for(var i=0;i<todoDone.length;i++){
   title2="Well Done!!"
      var row=   <tr id="d1">
      <td id="m1"><CheckCircleIcon/> &nbsp; &nbsp; {todoDone[i].toDo}</td> 
      </tr>
      
      allDone.push(row) 
   }
   }

   if(todoDueDate.length==0){
      
      var row =<h4>Employee has completed everything on time!</h4>
      allmissed.push(row)
      }
      else{
   
      for(var i=0;i<todoDueDate.length;i++){
      title3="Missed Tasks!!"
         var row=   <tr id="d1">
         <td id="m1"><ReportIcon/> &nbsp; &nbsp; {todoDueDate[i].toDo}</td> 
         </tr>
         
         allmissed.push(row) 
      }
      }
  


    return (
        <div>
            <div class="row">
            
                 <div class="col-sm-6 mb-5">
                 <center>
                    <div class="card mt-3 todo pending ">
                    <OverlayTrigger
                                 placement="top"
                                 delay={{ show: 100, hide: 100 }}
                                 overlay={renderTooltip}
                                 
                              >
                        <div class="card-body" >
                        
                          <h4 class="card-title" style={{ color: "#ca6702" }}>{title}</h4>

                            <div class="allpending" style={{ width: "80%" }}>
                               
                            {allpending}
                          </div>
                          
                       </div>
                       </OverlayTrigger> 
                       
                    </div>
                    </center>
                 </div>
                 <div class="col-sm-6 mb-5">
                 <center>
                    <div class="card mt-3 todo done" >
                    <OverlayTrigger
                                 placement="top"
                                 delay={{ show: 100, hide: 100 }}
                                 overlay={renderTooltip1}
                                 
                              >
                       <div class="card-body" >
                    
                          <h4 class="card-title text-success">{title2}</h4>
                             
                                <div  class="alldone " style={{ width: "80%" }}>
                                 {allDone}
                          </div>
                          
                       </div>
                       </OverlayTrigger> 
                    </div>
                    </center> 
                 </div>
                
            </div>
            <div class="row">
            <div class="col-sm-12 col-md-12">
            <center>
                    <div class="card mt-3 todo missed ">
                    <OverlayTrigger
                                 placement="top"
                                 delay={{ show: 100, hide: 100 }}
                                 overlay={renderTooltip2}
                                 
                              >
                        <div class="card-body" >
                        
                          <h4 class="card-title text-danger" >{title3}</h4>

                            <div class="allmissed" style={{ width: "80%" }}>
                               
                            {allmissed}
                          </div>
                          
                       </div>
                       </OverlayTrigger> 
                       
                    </div>
                    </center>
               </div>
               </div>
        </div>
    )
}
export default DisplayTodos
