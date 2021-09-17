import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aaa from './aaa.png'

import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListAltIcon from '@material-ui/icons/ListAlt';


import {
    Link,
    useRouteMatch
  } from "react-router-dom";



 
 
function EmployerHeader(props) {
    // let { path, url } = useRouteMatch();
    let url = "/employer"
  return (
    <section className=" header1">
       <div className="container navb">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand text-white" href="#"><img className="logo" src={aaa}/></a>
              <button className="navbar-toggler navbar-toggler2 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  
                  <li className="nav-item row1">
                  <Link  to={`/employer`} className="nav-link" style={{ textDecoration: 'none' ,color:"black"}} >
                 
                  <div id="icon"><PeopleIcon/></div>{" "}
         <div id="title">Employees</div>
                        </Link>
                  </li>
                  
                  <li className="nav-item row1 dropdown">
                  <Link to={`/employer/allcourses`} className="nav-link" style={{ textDecoration: 'none',color:"black" }} >
                  <div id="icon"><MenuBookIcon/></div>{" "}
         <div id="title">Courses</div>
                  
                        </Link>
                  </li>
                  <li className="nav-item row1">
                  <Link  to={`/employer/onboarding`} className="nav-link" style={{ textDecoration: 'none' ,color:"black"}} >
                 
                  <div id="icon"><ListAltIcon/></div>{" "}
         <div id="title">OnBoarding</div>
                        </Link>
                  </li>
                  <li className="nav-item row1 dropdown">
                  <Link className="nav-link" style={{ textDecoration: 'none',color:"black" }}onClick={props.onLogout} >
                  <div id="icon"><ExitToAppIcon/></div>{" "}
         <div id="title"> Logout</div>
                 
                        </Link>
                  </li>
                </ul>
                 
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}
export default EmployerHeader;