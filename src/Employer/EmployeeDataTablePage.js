import React, { Component } from 'react';

import { MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';
import './courses.css';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import InfoIcon from '@material-ui/icons/Info';

import axios from 'axios';
import {
  Link,
  withRouter
} from "react-router-dom";

const url = 'http://localhost:8089/api/employees';
class EmployeeDataTablePage extends Component {

  constructor(props) {

    super(props);
    console.log(props)

    this.state= {

      emps: [],

      isLoading:true,

      tableRows: [],

      todos:[]

    };

  }




  componentDidMount=async() => {
console.log("heloo")
console.log(url);
    await axios.get(url)

      .then(response => response.data)

      .then(data => {

         console.log(url);

         // if (err) throw err;

         this.setState({ emps: data })

      })

      .then(async() => {

         this.setState({ tableRows:this.assemblePosts(), isLoading:false })

         console.log(this.state.tableRows);

      });

      await axios.get('http://localhost:8080/api/TodosDueDatePassed/')

      .then(response => response.data)

      .then(data => {

         console.log(url);

         // if (err) throw err;

         this.setState({ todos: data })

      })

      .then(async() => {

         this.setState({ tableRows:this.assemblePosts(), isLoading:false })

         

      });



  }




  assemblePosts= () => {
    

    let emps =this.state.emps.map((emp) => {
      
      return (

        {

          
firstname: emp.firstName,
lastname:emp.lastName,
chapter:emp.designation,
email:emp.emailID,
date:emp.dateOfJoining,
overallonboarding:emp.onboardingProgress ,
coursecompletion:emp.completeWeightage,
edit:< Link to={"employer/allemployees/EditEmployee/"+emp.empId}className="btn btn-sm btn-secondary a-btn-slide-text">
<span><strong>Edit</strong></span></Link>,
noti :< Link to={"employer/allemployees/notification/"+emp.empId}className="btn btn-sm  a-btn-slide-text">
<span><strong><InfoIcon/></strong></span></Link>,
     

}

      )

    });

    return emps;

  }

  render() {
const { ur } = this.props.match;
    const data = {

      columns: [

        {
        label: 'First Name',
        field: 'firstname',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Last Name',
        field: 'lastname',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Chapter',
        field: 'chapter',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Date Of Joining',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      
      {
        label: 'Course Completion',
        field: 'coursecompletion',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Overall Onboarding',
        field: 'overallonboarding',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Edit',
        field: 'edit',
        sort: 'asc',
        width: 100
      },
 {
        label: 'Tasks Details',
        field: 'noti',
        sort: 'asc',
        width: 100
      },
      

      ],

      rows:this.state.tableRows,

    }




    return (

      <Row className="mb-4">
         <div className="row justify-content-end">
                    
                    <Link to={`employer/allemployees/AddEmployee`} className="btn btn-secondary btn-second">Add New Employee</Link>
                    
                    {/* <button className="btn btn-secondary col-2 addCourse" type="button">Add course</button> */}
                   
                </div>

        <Col md="12">

          <Card>

            <CardBody>

              <MDBDataTable

                striped

                bordered

                hover

                data={data}

              />

            </CardBody>

          </Card>

        </Col>

      </Row>

    )

  }

}




export default withRouter(EmployeeDataTablePage);



