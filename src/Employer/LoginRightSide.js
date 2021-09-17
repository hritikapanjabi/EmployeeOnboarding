import React from 'react';
import {FormGroup, Image,Form, Button, Input} from "react-bootstrap";
import bg from './bg.jpg'
import './LoginPage.css'

import GithubButton from 'react-github-login-button'

import GoogleButton from 'react-google-button'

const LoginRightSide = () => {
    return (
        <div className="row">
            <div className="col-sm-6 mb-5">
            <img src={bg} thumbnail style={{border:"none"}}/>
          </div>
          <div className="col-sm-6 mb-5">

          <Form className="login-form">
              <h2 className="text-center">Welcome!!</h2>
                <FormGroup >
                    <Form.Label className="text-center">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup >
                    <Form.Label className="text-center">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </FormGroup><br/>
                 <Button className="btn-lg btn-dark btn-block" >Login  </Button>
                 <Button className="btn-lg btn-dark btn-block" style={{ marginLeft: '.5rem' }}  >Signup</Button>

                               <div className="text-center pt-3">
                                   
                                </div><br/>
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
    )
}

export default LoginRightSide;