import React, { Component } from 'react';
import './NavBar.css';
import logo from './images/everibiteLogo.png';
import fb from './images/fbIcon.png';
import google from './images/googleIcon.png';
import login from './images/login.png';
import foodImg from './images/foodbox1.png';
import foodbox from './images/foodbox2.png';
import { Button, FormGroup, FormControl, Modal} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./LoginForm.css";
import Icon from 'react-icons-kit';
import {shoppingBag} from 'react-icons-kit/fa/';
import './EveribiteStyle.css';

export default class NavBar extends Component{
constructor(props, context) {
super(props, context);
this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
this.handleShow1 = this.handleShow1.bind(this);
this.state = {
show: false,
show1:false,
show2:false,
email: "",
password: ""
};
}
handleClose() {
this.setState({ show: false , show1: false});
}
handleClose1() {
this.setState({ show2: false });
}
handleShow() {
this.setState({ show: true });
}
handleShow1() {
this.setState({ show1: true });
}
validateForm() {
return this.state.email.length > 0 && this.state.password.length > 0;
}
handleChange = event => {
this.setState({
[event.target.id]: event.target.value
});
}
handleSubmit = event => {
event.preventDefault();
}
render(){
return(

<div className="navPart everibiteRobotoBold watermark">
  <div>
    <div className="everibite-bar everibite-white everibite-card" id="myNavbar">
    <Link to="/"><span><img src={logo} className="" alt="logo" /></span></Link>
    <div className="float-right p-3">
            <Button className="navButton everibiteViga"  onClick={this.handleShow}>
                  LOGIN
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose} className="watermark">
            <Modal.Header closeButton>            
            </Modal.Header>
            <Modal.Body className="p-5">
            <div className="everibite-top">
            <form onSubmit={this.handleSubmit}>
<img src={login} alt="fbIcon" className="float-left mr-4"/>
            <Modal.Title className="d-inline-block mt-3 mb-5">
            <h2 className="everibiteViga loginText">Login</h2>
            <h4 className="everibiteRobotoRegular existingUser">Existing User Login With Your Account</h4>
            </Modal.Title>
            <FormGroup controlId="email" bsSize="large">
            <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Phone Number/ Email ID"
            className="inputPart"
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            className="inputPart"/>
            </FormGroup>
            <Link to="" className="float-right mb-4 forgotPass everibiteRobotoRegular" onClick={this.handleShow1}>New User? ClickHere</Link>
            <Link to="/ForgotPassword" className="float-right mb-4 mr-5 forgotPass everibiteRobotoRegular">Forgot Password ?</Link>
		
            <Link to="/LandingPage"><Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4 loginBtn everibiteViga">
            LOGIN
            </Button></Link>
            <Button
            block   bsSize="large"
            className="my-3 fbText everibiteRobotoMedium"><img src={fb} alt="fbIcon" className="bg-white pr-1 mr-3" />
            SIGNIN WITH FACEBOOK</Button>
            <Button
            block   bsSize="large" bsStyle="default" className="glText everibiteRobotoMedium"><img src={google} alt="googleIcon" className="mr-3 bg-white"/>
            SIGNIN WITH GOOGLE</Button>
            </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose} >Close</Button>
            </Modal.Footer>
            </Modal>




            <Button className="navButton everibiteViga mx-3" onClick={this.handleShow1}>
            REGISTER
            </Button>
            <Modal show={this.state.show1} onHide={this.handleClose} className="watermark">
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
              
            <Modal.Body>
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
            <Modal.Title className="mb-5">
            <h2 className="newUser everibiteViga">New User</h2>
            <h4 className="registerNow everibiteRobotoRegular font14">Register Now !!</h4>
            </Modal.Title>
            <FormGroup controlId="usename" bsSize="large">

            <FormControl
            autoFocus
            type="text"
            placeholder="Name"
            value={this.state.username}
            onChange={this.handleChange}
            className="inputPart"/>
            </FormGroup>
            <FormGroup controlId="phonenumber" bsSize="large">

            <FormControl

            type="tel"
            placeholder="Phone Number"
            value={this.state.phonenumber}
            onChange={this.handleChange}
            className="inputPart"/>
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">

            <FormControl

            type="email"
            placeholder="Email ID"
            value={this.state.email}
            onChange={this.handleChange}
            className="inputPart"/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            className="inputPart"/>

		 <FormControl
            value={this.state.confirmpassword}
            onChange={this.confirmhandleChange}
            type="password"
            placeholder="ConfirmPassword"
            className="inputPart"/>
            </FormGroup>

            <Link to="/RegistrationProcess"><Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="mb-4 loginBtn regBtn text-center">
            REGISTER
            </Button></Link>
            </form>
            <h5 className="text-center mt-3 font13 everibiteRobotoRegular">By Creating an account, I accept the <Link to="" className="everibiteRobotoMedium font13 terms">Terms & Conditions</Link></h5>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>

          {/*<Icon icon={shoppingBag} className="everibiteCart" size={30}/> */}
          <img src={foodImg} alt="cartIcon" className="everibiteCart"/>

      
      </div>
      
    </div>
   </div> 

</div>
);
}
}
