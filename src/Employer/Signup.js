import React, { Component } from "react";
import {FormGroup, Image,Form, Button, Input} from "react-bootstrap";
import bg from './bg.jpg'
import login from './login.png'
import './LoginPage.css'
import GithubButton from 'react-github-login-button'

import GoogleButton from 'react-google-button'

export default class Signup extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm-6 mb-5" >
            <img src={bg} thumbnail style={{border:"none"}}/>
          </div>
          <div className="col-sm-6 mb-5">

          <Form className="login-form">
              <h2 className="text-center">Welcome!!</h2>
              <h3 className="text-center">Sign Up</h3>
              <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div><br/>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./LoginRightSide.js">sign in?</a>
                </p>
               
                 

                              
                                <div className="row">
                                    <div className="col">
                                    <GithubButton/><br/>
                                    </div>
                                    <div>
                                    <GoogleButton/>
                                    </div>
                                </div>
                               
                               
            </Form>
          </div>
        </div>
           
        );
    }
}