import React, { Component } from "react";
import {Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import './EveribiteStyle.css';


export default class ProfileUpdate extends Component {
    saveChanges() { 
    alert("Your changes has been updated !!");
    }
  render() {
    return (
        <div className="static-modal watermark"> 
        <Modal.Dialog style={{background:'#000'}} className="watermark"> 
            <Modal.Header> 
                <Modal.Title className="loginText">ProfileUpdate</Modal.Title> 
                </Modal.Header> 
                <Modal.Body className="wordColor">
                <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4} className="pt-0 font14"> Username </Col>
                   <Col sm={8}><p className="pt-0 mb-0 font14">Marry John</p></Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4} className="pt-0 font14"> Profile Picture </Col>
                   <Col sm={8}>
                    <FormControl type="file" accept="image/png, image/jpeg"/> </Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4} className="pt-0 font14"> Mobile Number</Col>
                   <Col sm={8}>  <p className="pt-0 mb-0 font14">+91 9493959698</p> </Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4} className="pt-0 font14">Alternate Mobile </Col>
                   <Col sm={7}>
                    <FormControl type="tel" placeholder="Alternate Mobile Number" className="mb-1"/> </Col>
                </FormGroup> 
                 <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4} className="pt-0 font14 mb-0"> Email </Col>
                   <Col sm={8}><p className="font14">abc@example.com</p></Col>
                </FormGroup>  
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4} className="pt-0 font14">Landline Number </Col>
                   <Col sm={7}>
                    <FormControl type="tel" placeholder="Landline Number" /> </Col>
                </FormGroup> 
                        </Form>

                </Modal.Body> 
                <Modal.Footer> 
                    <Button className="loginBtn" onClick={this.saveChanges.bind(this)}>SAVE CHANGES</Button> 
                </Modal.Footer> 
                </Modal.Dialog> 
                </div>
    );
  }
}
