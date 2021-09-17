import React, { Component } from 'react';

import { MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';
import './courses.css';
import axios from 'axios';
import {
  Link,
  useRouteMatch,
  withRouter
} from "react-router-dom";

const url = 'http://localhost:8089/api/courses';




class CoursesDataTablePage extends Component {

  constructor(props) {

    super(props);

    this.state= {

      crs: [],

      isLoading:true,

      tableRows: [],

    };

  }




  componentWillMount=async() => {

    await axios.get(url)

      .then(response => response.data)

      .then(data => {

         // console.log(data);

         // if (err) throw err;

         this.setState({ crs: data })

      })

      .then(async() => {

         this.setState({ tableRows:this.assemblePosts(), isLoading:false })

         //console.log(this.state.tableRows);

      });

  }




  assemblePosts= () => {

    let crs =this.state.crs.map((cr) => {

      return (

        {

id: cr.courseId,
name:cr.courseName,
courseweightage:cr.courseWeightage,
courseduedate:cr.courseDueDate,

edit:< Link to={`allcourses/EditCourse/${cr.courseId}`} className="btn btn-sm btn-secondary a-btn-slide-text">
<span><strong>Edit</strong></span> </Link>   }

      )

    });

    return crs;

  }





  render() {
    const { path, url } = this.props.match;

    const data = {

      columns: [

        {
        label: 'Course Id',
        field: 'id',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Course Weightage',
        field: 'courseweightage',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Course Due Date',
        field: 'courseduedate',
        sort: 'asc',
        width: 150
      },
  
      {
        label: 'Edit',
        field: 'edit',
        sort: 'asc',
        width: 100
      },
 

      ],

      rows:this.state.tableRows,

    }




    return (

        
      <Row className="mb-4">
           <div className="row justify-content-end">
                    <Link to={`${url}/AddCoursesBasedOnDesgn`} className="btn btn-secondary btn-first">Assign Courses</Link>
                    <Link to={`${url}/AddCourse`} className="btn btn-secondary btn-second">Add New Course</Link>
                    
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




export default withRouter(CoursesDataTablePage);



