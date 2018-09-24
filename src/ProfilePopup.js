import React, { Component } from 'react';
import { Button,Modal } from 'react-bootstrap';
import './UserFeedback.css';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
import './NavBar.css';
import './Footer.css';
import pic2 from './images/myorder.png';
import pic5 from './images/myreview.png';
import pic3 from './images/favourite.png';
import pic4 from './images/offer.png';
import pic1 from './images/myaccount.png';
import pic6 from './images/signout.png';
export default class ProfilePopup extends Component{
constructor(props, context) {
super(props, context);
this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
this.state = {
show: false
};
}
handleClose() {
this.setState({ show: false });
}
handleShow() {
this.setState({ show: true });
}
render(){
return(
<div>
  <NavBar1/>
  <div>
    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
    ProfilePopup
    </Button>
    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><img src={pic1} alt="icons"/><span className="ml-3">My Account</span></p>
        <p><img src={pic2} alt="icons"/><span className="ml-3">My Orders</span></p>
        <p><img src={pic3} alt="icons"/><span className="ml-3">Favourites</span></p>
        <p><img src={pic4} alt="icons"/><span className="ml-3">Offers</span></p>
        <p><img src={pic5} alt="icons"/><span className="ml-3">My reviews</span></p>
        <p><img src={pic6} alt="icons"/><span className="ml-3">Signout</span></p>       
      </Modal.Body>
      <Modal.Footer>
   
      </Modal.Footer>
    </Modal>
  </div>
  <CommonFooter/>
</div>
);
}
}


