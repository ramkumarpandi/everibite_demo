import React, { Component } from "react";
import {Modal,Button,Form,FormControl,FormGroup} from 'react-bootstrap';
import './EveribiteStyle.css';


export default class ForgotPassword extends Component {
    saveChanges() { 
    alert("Password Reset link has been sent to your given mailID !!");
    }
  render() {
    return (
        <div className="static-modal watermark"> 
        <Modal.Dialog style={{background:'#000'}} className="watermark"> 
            <Modal.Header> 
                <Modal.Title className="loginText">Forgot Password</Modal.Title> 
                </Modal.Header> 
                <Modal.Body className="wordColor">
                <Form horizontal>
                 <FormGroup controlId="formHorizontalEmail inputPart mb-0">
                    <FormControl type="email" placeholder="Email Your MailID" className="form-control-lg w-75 mx-auto"/>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail inputPart mb-0">
                    <FormControl type="tel" placeholder="Enter Your Registered Mobile Number" className="form-control-lg w-75 mx-auto"/> 
                </FormGroup>
                        </Form>
                </Modal.Body> 
                <Modal.Footer> 
                    <Button onClick={this.saveChanges.bind(this)} className="loginBtn">SAVE PASSWORD</Button> 
                </Modal.Footer> 
                </Modal.Dialog> 
                </div>
    );
  }
}
