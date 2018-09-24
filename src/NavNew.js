import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button, FormGroup, FormControl, Modal } from 'react-bootstrap';
import logo from './images/everibiteLogo.png';
import './NavBar.css';
import Icon from 'react-icons-kit';
import {shoppingBag} from 'react-icons-kit/fa/';
import './EveribiteStyle.css';
import fb from './images/fbIcon.png';
import google from './images/googleIcon.png';
import login from './images/login.png';

export default class NavNew extends Component
{
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
render()
{
return(
<Navbar default collapseOnSelect className="everibiteRobotoBold">
  <Navbar.Header>
    <Navbar.Brand>
      <Link to={"/"}>
      <img src={logo} alt="LogoImg"/></Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
 <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}>
      <Button className="navButton everibiteViga"  onClick={this.handleShow}>
                  LOGIN
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>            
            </Modal.Header>
            <Modal.Body className="p-5">
            <div className="everibite-top">
            <form onSubmit={this.handleSubmit}>
<img src={login} alt="fbIcon" className="float-left mr-4"/>
            <Modal.Title className="d-inline-block mt-3 mb-5">
            <h2 className="everibiteViga" style={{color:'#2a830c'}}>Login</h2>
            <h4 style={{color:'#666'}}>Existing User Login With Your Account</h4>
            </Modal.Title>
            <FormGroup controlId="email" bsSize="large">
            <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Phone Number/ Email ID"
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            />
            </FormGroup>
<a href="#" className="float-right mb-4 text-success" onClick={this.handleShow1}>New User? ClickHere</a>
            <a href="#" className="float-right mb-4 text-success mr-5">Forgot Password ?</a>
		
            <Link to="/LandingPage"><Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4 text-white">
            LOGIN
            </Button></Link>
            <Button
            block   bsSize="large"
            className="my-3 text-white"><img src={fb} alt="fbIcon" className="bg-white pr-1 mr-3" />
            SIGNIN WITH FACEBOOK</Button>
            <Button
            block   bsSize="large" bsStyle="default"><img src={google} alt="googleIcon" className="mr-3 bg-white"/>
            SIGNIN WITH GOOGLE</Button>
            </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose} >Close</Button>
            </Modal.Footer>
            </Modal>
      </NavItem>
      <NavItem eventKey={2}>
      <Button className="navButton everibiteViga" onClick={this.handleShow1}>
            REGISTER
            </Button>
            <Modal show={this.state.show1} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
              
            <Modal.Body>
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
            <Modal.Title className="mb-5">
            <h2 className="text-success">New User</h2>
            <h4>Register Now ! and Create an Account</h4>
            </Modal.Title>
            <FormGroup controlId="usename" bsSize="large">

            <FormControl
            autoFocus
            type="text"
            placeholder="Name"
            value={this.state.username}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="phonenumber" bsSize="large">

            <FormControl

            type="tel"
            placeholder="Phone Number"
            value={this.state.phonenumber}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">

            <FormControl

            type="email"
            placeholder="Email ID"
            value={this.state.email}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            />

		 <FormControl
            value={this.state.confirmpassword}
            onChange={this.confirmhandleChange}
            type="password"
            placeholder="ConfirmPassword"
            />
            </FormGroup>

            <Link to="/RegistrationProcess"><Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4 text-white">
            Register
            </Button></Link>
            </form>
            <h5 className="text-center mt-3">By Creating an account, <a href="#" className="text-success">I accept the Terms & Conditions</a></h5>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
      </NavItem>
<NavItem eventKey={3}>
<Icon icon={shoppingBag} className="everibiteCart" size={30}/>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
}


