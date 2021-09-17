import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {Redirect } from 'react-router-dom'

import Employee from '../../Employee/Employee';


class Profile extends Component {
    
      render() {
          if(this.props.currentUser.email=="sayalibhiungade@gmail.com"){
            return <Redirect
                to={{
                pathname: "/employer",
                state: { from: this.props.location }
            }}/>; 
          }
          else{

            return <Switch>
            <Redirect to="/employee" />
            <Route path="/employee">
              <Employee/>
            </Route>
          </Switch>; 
          }
        
    
      }
    
    }
    
    
    
    
   

export default Profile