import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../Employee/Header';
import EmployerHeader from '../Employer/EmployerHeader';
import './AppHeader.css';
import aaa from './aaa.png'

class AppHeader extends Component {
    constructor(props) {
        super(props)
    
        console.log(props)
    }
    
    render() {
        return (
            <header>
               
                    <div>
                        <nav className="app-nav header1">
                                { this.props.authenticated ? (

                                    this.props.currentUser.email=="sayalibhiungade@gmail.com"?
                                    (<EmployerHeader onLogout={this.props.onLogout}/>):
                                    (<Header onLogout={this.props.onLogout}/>)
                                ): (
                                    
                                    <div className="app-branding">
                                            <Link to="/" className="app-title"><img className="logo" src={aaa}/></Link>
                                        
                                    <ul className="app-options">
                                        <li>
                                            <NavLink to="/login">Login</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Signup</NavLink>        
                                        </li>
                                    </ul></div>
                                )}
                        </nav>
                    </div>
               
            </header>
        )
    }
}

export default AppHeader;