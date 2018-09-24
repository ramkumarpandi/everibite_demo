import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Media,Button,Modal } from 'react-bootstrap';
import './UserFeedback.css';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
import './NavBar.css';
import './Footer.css';
import biryani from './images/biriyani.png';
import warranty from './images/warranty.png';
export default class UserFeedback extends Component{
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
    UserFeedback
    </Button>
    <Modal show={this.state.show} onHide={this.handleClose} className="watermark">
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Media className="watermark">
          <Media.Left>
            <img width={100} height={100} src={biryani} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <span className="float-right everibite-vegIcon text-danger">&#8865;</span>
              <h4>Hyderabad Chiken Biryani With Raita</h4>
              <h5>South Indian Biryani</h5>
            </Media.Heading>
            <div className="float-right"><span className="glyphicon glyphicon-heart-empty mr-4"></span><span className="bg-success text-white glyphicon glyphicon-star-empty p-2 font-weight-bold"><span className="ml-3">4.0</span></span></div>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left>
            <img width={100} height={100} src={warranty} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h4>Just spend your 30 sec to review your last order</h4>
              <h3 className="text-success">10% OFF on your next order</h3>
            </Media.Heading>
          </Media.Body>
        </Media>
        <div className="text-center display-4 watermark">
          <span className="glyphicon glyphicon-star-empty mr-3"></span>
          <span className="glyphicon glyphicon-star-empty mr-3"></span>
          <span className="glyphicon glyphicon-star-empty mr-3"></span>
          <span className="glyphicon glyphicon-star-empty mr-3"></span>
          <span className="glyphicon glyphicon-star-empty"></span>
        </div>
        <div className="text-center mt-5 watermark">
          <Button className="btn-outline-success text-success px-4 mr-3">Taste</Button>
          <Button className="btn-outline-success text-success px-4 mr-3">Quantity</Button>
          <Button className="btn-outline-success text-success px-4 mr-3">Delivery</Button>
          <Button className="btn-outline-success text-success px-4 mr-3">Quality</Button>
          <Button className="btn-outline-success text-success px-4 mr-3">Cost</Button>
          <Button className="btn-outline-success text-success px-4 mr-3">Over all</Button>
        </div>
        <form>
          <center><textarea placeholder="Comments(optional)" rows="4" cols="60" className="d-block my-4"></textarea></center>
          <center>
            <Button className="btn-success text-white px-4">SUBMIT</Button>
            <Link to="" className="text-success ml-4">
            Do it later</Link>
          </center>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>
  <CommonFooter/>
</div>
);
}
}


