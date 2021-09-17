import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aaa from './aaa.png'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
    Link,
    useRouteMatch
  } from "react-router-dom";


function Header(props) {
  let { path, url } = useRouteMatch();
  return (
    <section className=" header1 ">
       <div className="container navb header">
          <div >
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand text-white" href="#"><img className="logo" src={aaa}/></a>
              <button className="navbar-toggler navbar-toggler2 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item row1 ">
                  <Link to="/employee/notifications" className="nav-link" style={{ textDecoration: 'none',color:"black" }} >
                 
                  <div id="icon"> <NotificationImportantIcon/></div>{" "}
         <div id="title"> Notifications</div>
                        </Link><span class="sr-only"></span>
                  </li>
                  <li className="nav-item row1">
                  <Link  to="/employee/empinfo" className="nav-link" style={{ textDecoration: 'none' ,color:"black"}} >
                 
                  <div id="icon"><PersonIcon/></div>{" "}
         <div id="title"> Profile</div>
                        </Link>
                  </li>
                  
                  <li className="nav-item row1 dropdown">
                  <Link to={`/employee`} className="nav-link" style={{ textDecoration: 'none',color:"black" }} >
                  <div id="icon"><DashboardIcon /></div>{" "}
         <div id="title">Dashboard</div>
                  
                        </Link>
                  </li>
                  <li className="nav-item row1 dropdown">
                  <Link to={`${url}/logout`} className="nav-link" style={{ textDecoration: 'none',color:"black" }} onClick={props.onLogout}>
                  <div id="icon"><ExitToAppIcon /></div>{" "}
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
export default Header;