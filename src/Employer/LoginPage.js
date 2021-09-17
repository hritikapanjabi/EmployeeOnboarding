import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";

const LoginPage = () => {
    return (
        <>
            <Container>
                
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12}>
                    
           <Image src="./login.png" thumbnail style={{border:"none"}} /> 
        
                    </Col>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
               
            </Container>
        </>
    );
};

export default LoginPage;