import React from 'react'
import {useParams} from 'react-router-dom'
import AddCoursesBasedOnDesgn from './AddCoursesBasedOnDesgn'


import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import UpdateCourse from './UpdateCourse';
import AddCourse from './AddCourse';
import CoursesDataTablePage from './CoursesDataTablePage';

function Coursewrap() {
    let { path, url } = useRouteMatch();
    return (
        <div>
                    <Switch>
                                <Route exact path={path}>
                                <CoursesDataTablePage/>
                                </Route>
                                <Route path={`${path}/AddCoursesBasedOnDesgn`}>
                               <AddCoursesBasedOnDesgn/>
                                </Route>
                                <Route path={`${path}/AddCourse`}>
                                <AddCourse/>
                                </Route>
                                <Route path={`${path}/EditCourse/:id`}>
                                 <UpdateCourse/>
                                </Route>
                    </Switch>
        </div>
    )
}

export default Coursewrap
