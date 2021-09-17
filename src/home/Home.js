import React, { Component } from 'react';
import EmployeeDataTablePage from '../Employer/EmployeeDataTablePage';
import './Home.css';
import Teamwork_logo from './Teamwork_logo.jpg';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
class Home extends Component {

    onload = function startAnimation() { 
        var frames = document.getElementById("home-container").children;
        var frameCount = frames.length;
        var i = 0;
        setInterval(function () { 
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
        }, 1000); 
    }

    componentDidMount()
    {
        this.onload();
    }
    render() {
        return (


            <div className="home-container" id="home-container">
               
                        <img src={Teamwork_logo} style={{ width: 670, height: 450 }}/>
                        <img src={img2} style={{ width: 670, height: 450 }}/>
                        <img src={img3} style={{ width: 670, height: 450 }}/>
                        {/* <img src={img1} style={{ width: 500, height: 400 }}/> */}
                           
            
                
            </div>
        )
    
    }
}

export default Home;

// https://images.all-free-download.com/images/graphiclarge/team_work_background_employees_riding_bicycle_sketch_6844918.jpg