import React, { Component } from 'react'
import Comp from './Comp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    matchPath,
    withRouter
  } from "react-router-dom";
import EmployerHeader from './EmployerHeader'

import EmployeeDataTablePage from './EmployeeDataTablePage';

export class Employer extends Component {
    constructor(props){
        super(props)
       
    }
    
    render() {
        return (
            <div>
           <Switch>
                <Route exact path="/employer">
                <EmployeeDataTablePage/>
                </Route>
                <Route path={`/employer/:myComp`}>
                <Comp />
                </Route>
      </Switch> 
            </div>
        )
    }
}

export default Employer
