import React from 'react'
import { useParams } from 'react-router'
import Notifications from './Notifications';
import EmployeeForm from './EmployeeForm';
import Dashboard from './Dashboard'

function Abc(props) {
    let {myCode} = useParams()
    console.log(myCode)
    if(myCode=="empinfo"){
        return(<EmployeeForm empId={props.empId}/>)

    }else if(myCode=="notifications"){
        return (<Notifications empId={props.empId}/>)

    }else{
        return(<Dashboard empId={props.empId}/>)
    }
}

export default Abc
