import React, { Component } from 'react';

import { MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';
import './courses.css';

import axios from 'axios';
import {
  Link,
  useRouteMatch,
  withRouter
} from "react-router-dom";

const url = 'http://localhost:8089/api/onboarding';


//let { path, url } = useRouteMatch();

class OnboardingDataTablePage extends Component {
   
    
  constructor(props) {
   

    super(props);

    this.state= {

      todos: [],

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

         this.setState({ todos: data })

      })

      .then(async() => {

         this.setState({ tableRows:this.assemblePosts(), isLoading:false })

         console.log(this.state.tableRows);

      });

  }




  assemblePosts= () => {

    let todos =this.state.todos.map((tod) => {

      return (

        {

todoname:tod.toDo,
estimateddate:tod.estDateOfCompletion,

edit:< Link to={`onboarding/EditTodo/${tod.toDoId}`} className="btn btn-sm btn-secondary a-btn-slide-text">
<span><strong>Edit</strong></span> </Link>   }

      )

    });

    return todos;

  }





  render() {
    const { path, url } = this.props.match;

    const data = {

      columns: [

        {
        label: 'Todo',
        field: 'todoname',
        sort: 'asc',
        width: 150
      },
  {
        label: 'Estimated Date Of Completion',
        field: 'estimateddate',
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
                    <Link to={`${url}/AddToDoBasedOnDesgn`} className="btn btn-secondary btn-first">Assign Todos</Link>
                    <Link to={`${url}/AddTodo`} className="btn btn-secondary btn-second">Add New To Do</Link>
                    
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




//export default OnboardingDataTablePage;
export default withRouter(OnboardingDataTablePage);



