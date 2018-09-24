import React, { Component } from "react";
import {Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import './EveribiteStyle.css';
export default class NewAddress extends Component {
saveChanges(e) { 
    e.preventDefault();
}
render() {
return (
<div className="newaddress">
  <Modal.Dialog style={{background:'#000'}}>
    <Modal.Header className="p-0">
      <Modal.Title className="loginText">Add New Address</Modal.Title>
    </Modal.Header>
    <Modal.Body className="wordColor everibiteRobotoMedium">
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          Place </Col>
          <Col sm={8}>
          {/*<ButtonToolbar>
            <DropdownButton
              bsStyle="default"
              title="-- Select Place --"
              noCaret
              id="dropdown-no-caret">
              <MenuItem eventKey="1">Home</MenuItem>
              <MenuItem eventKey="2">work</MenuItem>
              <MenuItem eventKey="3">Others</MenuItem>
            </DropdownButton>
          </ButtonToolbar>*/}
          <input type="submit" value="home" className="py-2 px-3 placeStyle"/>
          <input type="submit" value="work" className="py-2 px-3 placeStyle"/>
          <input type="submit" value="other" className="py-2 px-3 placeStyle"/>

          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          House/Flat No. </Col>
          <Col sm={8}>
          <FormControl type="text" placeholder="House/Flat No." className="m-0 mb-1 form-control-lg"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          Address1 </Col>
          <Col sm={8}>
          <FormControl type="text" placeholder="Address1" className="m-0 mb-1 form-control-lg"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          Address2 </Col>
          <Col sm={8}>
          <FormControl type="text" placeholder="Address2" className="m-0 mb-1 form-control-lg"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          Landmark </Col> 
          <Col sm={8}>
          <FormControl type="text" placeholder="Landmark" className="m-0 mb-1 form-control-lg"/>
          </Col> 
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          City </Col> 
          <Col sm={8}>
          <FormControl type="text" placeholder="City" className="m-0 mb-1 form-control-lg"/>
          </Col> 
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          ZipCode </Col> 
          <Col sm={8}>
          <FormControl type="text" placeholder="Zipcode" className="m-0 mb-1 form-control-lg"/>
          </Col> 
        </FormGroup>
        {/*<FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3} className="font14">
          State </Col>
          <Col sm={8}>
          <ButtonToolbar>
            <DropdownButton
              bsStyle="default"
              title="-- Select State --"
              noCaret
              id="dropdown-no-caret"
              >
              <MenuItem eventKey="1">AndhraPradesh</MenuItem>
              <MenuItem eventKey="2">Karnataka</MenuItem>
              <MenuItem eventKey="3">Kerala</MenuItem>
              <MenuItem eventKey="4">Tamilnadu</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          </Col>
        </FormGroup>*/}
      </Form>
    </Modal.Body>
    <Modal.Footer> 
      <Button onClick={this.saveChanges.bind(this)} className="loginBtn">SAVE CHANGES</Button> 
    </Modal.Footer>
  </Modal.Dialog>
</div>
);
}
}