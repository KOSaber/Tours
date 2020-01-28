import guide from './DB' //Import the file where the data is stored.
import React, { Component } from 'react';
import TourForm from './TourForm'
import {
  Container,CustomInput, Col,Row, Form,FormText,
  FormGroup, Label, Input,
  Button
} from 'reactstrap';
import {
    Link
   } from 'react-router-dom';
import './App.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { render } from "react-dom";
import ReactPhoneInput from "react-phone-input-2";


class SignUp extends Component {
    state={
        moreInfo:"",
        status: false,
        phone: ""
    }
    showInfo(e){
        // e.preventDefault()
        this.setState({moreInfo:<TourForm/>})
    }
    hideInfo(e){
        // e.preventDefault()
        this.setState({moreInfo:''})
    }
    handleChange(e) {
        this.setState({status: !this.state.status})
        if(!this.state.status){
        this.showInfo(e);}else {this.hideInfo(e)}
      }
    //   setValue = (event) => {
    //     // event.preventDefault();
        
    //     this.setState({value: event.target.value })
    // }
    handleOnChange = value => {
        console.log(value);
        this.setState({ phone: value }, () => {
          console.log(this.state.phone);
        });}

  render() {
  return (
    <div >
      <br/><br/><br/><br/><br/>
      <h2 className="title">Sign Up</h2>
     <Form className="SignUp"> 
    <Row>
      <Col>
        <FormGroup className="col-md-10">
            <Label for="First Name">First Name :</Label>
            <Input type="text" name="First Name" id="First Name" placeholder="Enter your First Name" />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup className="col-md-10">
            <Label for="Last Name">Last Name :</Label>
            <Input type="text" name="Last Name" id="Last Name" placeholder="Enter your Last Name" />
        </FormGroup>
      </Col>
      </Row>
      <Row>
      <Col>
      <FormGroup className="col-md-10">
        <Label for="Phone Number">Phone Number : </Label>
        {/* <Input type="tel" name="Phone" id="Phone" pattern="[+]{1}[0-9]{11,14}" placeholder="+966 " /> */}
        {/* const [value, setValue] = useState()value={this.props.value} onChange={this.props.onChange} */}
        {/* <PhoneInput placeholder="Enter phone number" value={this.state.value} onChange={(e)=>this.setValue(e)}/> */}
        <ReactPhoneInput inputExtraProps={{name: "phone",required: true,autoFocus: true}}
          defaultCountry={"sg"} value={this.state.phone} onChange={this.handleOnChange}/>
      </FormGroup>
      </Col>
      <Col>
      <FormGroup className="col-md-10">
        <Label for="exampleEmail">Email :</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      </Col>
      </Row>
      <Row>
      <Col>
      <FormGroup className="col-md-10">
        <Label for="examplePassword">Password :</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      </Col>
      <Col>
      <FormGroup className="col-md-10">
        <Label for="examplePassword">Confirm Password :</Label>
        <Input type="password" name="password_confirmation" id="password_confirmation" />
      </FormGroup>
      </Col>
      </Row>
      <Col>
        <FormGroup tag="fieldset">
        <Label>User Type : </Label>
          <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Tour" onChange={(e)=>this.handleChange(e)} />
          {this.state.moreInfo}
        {/* <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={(e)=> this.hideInfo(e)}/>{' '}
            Regular user
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onClick={(e)=> this.showInfo(e)}/>{' '}
            Tour
            {this.state.moreInfo}
          </Label>
        </FormGroup> */}
      </FormGroup>
      </Col>
      <Col>
      <Button>Submit</Button>
      <Link to="/Login"><Button className='log'>Sign In</Button></Link>
      </Col>
    </Form>
    </div>
  );
}}

export default SignUp;