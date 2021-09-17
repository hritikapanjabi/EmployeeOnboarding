import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../constants';
import { signup } from '../../util/APIUtils';
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Alert from 'react-s-alert';
import bg from './bg.jpg'
import login from './login.png'
import './LoginPage.css'
import GithubButton from 'react-github-login-button'

import GoogleButton from 'react-google-button'

class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            
                    <div>
                    <SignupForm {...this.props} />
                    
                </div>
           
        );
    }
}


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
            this.props.history.push("/login");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }

    render() {
        return (

            <div className="row" style={{marginTop:'0'}}>
            <div className="col-sm-6 mb-5" style={{marginBottom:'0'}}>
            <img src={bg} thumbnail style={{border:"none",width:'110%'}}/>
          </div>
          <div className="col-sm-6 mb-5" style={{marginLeft:'50', marginBottom:'0'}}>

          <Form onSubmit={this.handleSubmit} >
              
              
                    <label>Name</label>
                    <input type="text" name="name" 
                        className="form-control" placeholder=" Enter Name" style={{width:'200'}}
                        value={this.state.name} onChange={this.handleInputChange} required/>
                
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" 
                        value={this.state.email} onChange={this.handleInputChange} required/>
                
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" 
                        value={this.state.password} onChange={this.handleInputChange} required/>
            

                <div className="text-center pt-3" >
                            <Button className="btn-lg btn-dark btn-block" type="submit" style={{marginLeft:'0'}}>Signup </Button>
                  
                                        
                                    <p className="or-separator"><span className="or-text ">OR</span></p>
                               
                                
                                <div className="row" >
                                    <div className="col">
                                    <a className="social-btn github l" href={GITHUB_AUTH_URL} ><GithubButton/></a><br/>
                                    </div>
                                    <div className="col">
                                    <a className="social-btn google l" href={GOOGLE_AUTH_URL} ><GoogleButton/></a>
                                    </div>
                                    <span className="login-link text-center">Already have an account? <Link to="/login">Login!</Link></span>
                                </div>
                                </div>
            </Form>
          </div>
        </div>
            // <form onSubmit={this.handleSubmit}>
            //     <div className="form-item">
            //         <input type="text" name="name" 
            //             className="form-control" placeholder="Name"
            //             value={this.state.name} onChange={this.handleInputChange} required/>
            //     </div>
            //     <div className="form-item">
            //         <input type="email" name="email" 
            //             className="form-control" placeholder="Email"
            //             value={this.state.email} onChange={this.handleInputChange} required/>
            //     </div>
            //     <div className="form-item">
            //         <input type="password" name="password" 
            //             className="form-control" placeholder="Password"
            //             value={this.state.password} onChange={this.handleInputChange} required/>
            //     </div>
            //     <div className="form-item">
            //         <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
            //     </div>
            // </form>                    

        );
    }
}

export default Signup