import React from 'react'
import AddToDoBasedOnDesgn from './AddToDoBasedOnDesgn';




import {
    Switch,
    Route,
   
    useRouteMatch
  } from "react-router-dom";

import UpdateToDo from './UpdateToDo';
import AddToDo from './AddTodo';
import OnboardingDataTablePage from './OnboardingDataTablePage';


function Todowrap() {
    let { path, url } = useRouteMatch();
    return (
        <div>
                    <Switch>
                                <Route exact path={path}>
                                <OnboardingDataTablePage/>
                                </Route>
                                <Route path={`${path}/AddTodoBasedOnDesgn`}>
                              <AddToDoBasedOnDesgn/>
                                </Route>
                                <Route path={`${path}/AddTodo`}>
                                 <AddToDo/>
                                </Route>
                                <Route path={`${path}/EditTodo/:id`}>
                                 <UpdateToDo/>
                                </Route>
                    </Switch>
        </div>
    )
}

export default Todowrap
