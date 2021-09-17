import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Header from './Header';

import axios from 'axios';

import Dashboard from './Dashboard';
import EmployeeForm from './EmployeeForm';
import Topic from './Topic';
import Notifications from './Notifications';

const url = 'http://localhost:8089/api/employeeByemailid/';
let empId=""
export class Employee extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        console.log(props)
        this.state= {

          emps: {}}
        // 
     
      }
      
      componentDidMount=async() => {
        console.log("heloo")
        let em= this.props.currentUser.email;
        
        console.log(url);
            await axios.get(url+em)
        
              .then(response => response.data)
        
              .then(data => {
        
                 console.log(data);
        
                this.setState({ emps: data })
                empId=data.empId
                 console.log(empId)
        
              })
        
          }
          
    
    render() {
        
        return (
            <div>
                <Switch>
                <Route exact path="/employee">
                 <Dashboard empId={this.state.emps.empId}/>
                 </Route>
                 <Route path="/employee/notifications">
                 <Notifications empId={this.state.emps.empId}/>
                 </Route>
                 <Route path="/employee/empinfo">
                 <EmployeeForm empId={this.state.emps.empId}/>
                 </Route>
                 </Switch>
                {/* <Switch>
                 <Route exact path="/employee">
                 <Dashboard empId={this.state.emps.empId}/>
                 </Route>
                 <Route path="/employee/:myCode">
                 <EmployeeForm empId={this.state.emps.empId}/>
                 </Route>
                </Switch> */}

                {/* <Route path="/employee" handler={Dashboard } />
                <Route path="/employee/notifications" handler={Notifications} /> */}
                
            </div>
        )
    }
}

export default Employee
