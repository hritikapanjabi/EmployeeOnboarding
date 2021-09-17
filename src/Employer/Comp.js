import React from 'react'
import {useParams} from 'react-router-dom'

import Employeewrap from './Employeewrap'
import Coursewrap from './Coursewrap'
import Todowrap from './Todowrap'


function Comp() {
    
    let {myComp} = useParams();
    
    
    //  return (<Employeewrap/>)
       {
        if(myComp=="allemployees"){
          return (<Employeewrap/>);}
         else if(myComp=="allcourses") 
          {return(<Coursewrap/>);}
          else if(myComp=="onboarding"){
            return(<Todowrap/>);}
            
          }
        

      {/* <h3>{topicId}</h3> */}

   
 
}

export default Comp
