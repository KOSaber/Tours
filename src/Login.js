//import React from 'react';
import guide from './DB' //Import the file where the data is stored.
import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button
} from 'reactstrap';
import {
 Link
} from 'react-router-dom';

import './App.css';


class Login extends Component {
  render() {
  return (
    <Container className="SpaceUp">
      <h2 className="title">Sign In</h2>
      <br/>
      <Form className="form">
        <Col>
          <FormGroup className="col-md-10">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="col-md-10">
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button className="log">Submit</Button>{'  '}
        <Link to="/SignUp"><Button className='log'>SignUp</Button></Link>
        {/* <a href="SignUp"> SignUp</a>  */}
      </Form>
    </Container>
  );
}
}

export default Login;
