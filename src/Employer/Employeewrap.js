import React from 'react'


import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import AddEmployee from './AddEmployee';
import Notifications from '../Employee/Notifications';
import UpdateEmployee from './UpdateEmployee';
import EmployeeDataTablePage from './EmployeeDataTablePage';

function Employeewrap() {
   let { path, url } = useRouteMatch();
   console.log(path)
   
    return (
        <div>
                    {/* <Switch>
                                <Route exact path="/employer">
                                <EmployeeDataTablePage/>
                                </Route>
                                <Route path={`/employer/AddEmployee`}>
                                 <AddEmployee/>
                                </Route>
                                <Route path={`/employer/EditEmployee/:id`}>
                               <UpdateEmployee/>
                                </Route>
                                
                    </Switch> */}

<Switch>
                                <Route exact path={path}>
                                <EmployeeDataTablePage/>
                                </Route>
                                <Route path={`${path}/AddEmployee`}>
                                 <AddEmployee/>
                                </Route>
                                <Route path={`${path}/EditEmployee/:id`}>
                               <UpdateEmployee/>
                                </Route>
                                <Route path={`${path}/notification/:id`}>
                                   <Notifications />
                               </Route>
                    </Switch>
        </div>
    )
}

export default Employeewrap
