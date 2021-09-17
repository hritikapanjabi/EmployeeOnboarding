import React, { Component } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";
import Alert from 'react-s-alert';
import bg from './bg.jpg'
import './LoginPage.css'

import GithubButton from 'react-github-login-button'

import GoogleButton from 'react-google-button'

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        if(this.props.authenticated) {
            console.log(this.props)
            return <Redirect
                to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>;            
        }
        return (
            <div className="login-container">
                
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                
            </div>
        );
    }
}




class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
        const loginRequest = Object.assign({}, this.state);
        console.log(loginRequest.email)

        login(loginRequest)
        
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          
            // this.forceUpdate();
            Alert.success("You're successfully logged in!");
           
                this.props.history.push("/profile");
            
             window.location.reload();
                
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (

            <Container >
                
                <div className="row">
            <div className="col-sm-6 mb-5">
            <img src={bg} thumbnail style={{border:"none", marginRight:'20', width:'98%'}}/>
          </div>
          <div className="col-sm-6 mb-5" style={{marginRight:'0'}}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" 
                        className="form-control" 
                        value={this.state.email} onChange={this.handleInputChange} required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" 
                        className="form-control"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                            </Form.Group>

                            <div className="text-center pt-3" >
                            <Button className="btn-lg btn-dark btn-block" type="submit" style={{marginLeft:'0'}}>Login  </Button>
                  
                                        <div className="or-separator">
                                    <span className="or-text">OR</span>
                                </div>
                                
                                <div className="row" style={{marginLeft:'30'}}>
                                    <div className="col">
                                    <a className="social-btn github l" href={GITHUB_AUTH_URL} ><GithubButton/></a><br/>
                                    </div>
                                    <div className="col" style={{marginTop:'20'}}>
                                    <a className="social-btn google l" href={GOOGLE_AUTH_URL} ><GoogleButton/></a>
                                    </div>
                                </div>
                                </div><br/>
                               
                               
            </Form>
                        
                    </div></div>
            </Container>


            // <form onSubmit={this.handleSubmit}>
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
            //     {/* <Link to="/profile"></Link> */}<button type ="submit" className="btn btn-block btn-primary">Login</button>
            //     </div>
            // </form>                    
        );
    }
}

export default Login
