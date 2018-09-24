import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './OrdersCopy.css';
import './Footer.css';
import './NavBar.css';
import avatarMale from './images/avatar-male.png';
import location from './images/location.png';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
export default class OrdersCopy extends Component{
render(){
return(
<div>
  <NavBar1/>
  <div className="container watermark">
    <p className="mt-2">Home/Coimbatore/My Orders/45890124</p>
    <div className="row pb-5 mb-5">
      <div className="col-md-8">
        <div className="shadow p-3 mb-5 bg-white rounded watermark">
		<Media>
          <Media.Left>
           <span className="glyphicon glyphicon-chevron-left text-white bg-success p-3 rounded-circle"></span>
          </Media.Left>
          <Media.Body>
            <Media.Heading className="d-inline-block">
              <h5>Your Order Number#</h5>
		<h2>45890124</h2>
            </Media.Heading>
            <p className="float-right">
              {Date()}
            </p>
          </Media.Body>
        </Media>

<img src={location} alt="LocationMap" className="w-100"/>
<p><span className="glyphicon glyphicon-home text-success px-2 ml-2"></span><span>Biryani Paradise, Willson Garden</span><span className="glyphicon glyphicon-arrow-right text-success"></span><span className="glyphicon glyphicon-map-marker px-2"></span><span>35A, West Street, Ramanathapuram, Coimbatore.</span></p>
<div>
	<span className="glyphicon glyphicon-time text-success float-right d-block font-weight-bold pb-4 everibite-time-font-size">40mins</span>
	<div className="progress w-100">
 <div className="progress-bar progress-bar-striped progress-bar-animated w-50 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
<div className="">
<h3>Delivery Agent</h3>
<div className="media">
            <img className="mr-3 rounded-circle accountLogo" src={avatarMale} alt="avatar"/>
            <div className="media-body">
              <h4 className="mt-3">Ilanchezhiyan</h4>
              <h4>+91-923456780</h4>
            </div>
<button className="float-right btn btn-outline-success">Contact Support</button>
          </div>
</div>
	</div>
      </div>
      <div className="col-md-4">
        <div className="shadow mb-5 bg-white rounded watermark">
          <div className="bg-success p-2">
            <h3 className="text-white ml-2">Order Information</h3>
          </div>
          <div className="mt-4 d-inline-block ml-3">
            <h4>Hyderabadi Chicken Biryani With Raita</h4>
            <h5>South Indian, Biryani</h5>
            <h6>Biryani Paradise, Wilson Garden</h6>
          </div>
          <div className="float-right mt-4">
            <p className="everibite-price-font text-success mb-0 mr-3">&#x20B9; 220</p>
            <p className="text-danger everibite-vegIcon mb-0">&#8865;</p>
          </div>
          <hr className="shadow bg-white mx-3"/>
	 <div className="mt-4 d-inline-block ml-3">
            <h4>Hyderabadi Chicken Biryani With Raita</h4>
            <h5>South Indian, Biryani</h5>
            <h6>Biryani Paradise, Wilson Garden</h6>
          </div>
          <div className="float-right mt-4">
            <p className="everibite-price-font text-success mb-0 mr-3">&#x20B9; 220</p>
            <p className="text-danger everibite-vegIcon mb-0">&#8865;</p>
          </div>
          <hr className="shadow bg-white mx-3"/>
 <p className="ml-3 text-muted">
<span>Item Total</span>
<span className="float-right mr-3">&#x20B9; 440</span>
</p>
<p className="ml-3 text-muted">
<span>Restaurant Packing Charges</span>
<span className="float-right mr-3">&#x20B9; 7.50</span>
</p>
<p className="ml-3 text-muted">
<span>GST</span>
<span className="float-right mr-3">&#x20B9; 20.93</span>
</p>
<p className="ml-3 text-muted">
<span>Delivery Charges</span>
<span className="float-right mr-3">&#x20B9; 40</span>
</p>
        <hr className="bg-success everibite-hr"/> 
<div className="p-3">
<h4 className="d-inline-block text-success">AMOUNT PAID</h4>
<h4 className="float-right mr-3 text-success">&#x20B9; 508.83</h4>
</div> 

        </div>

      </div>

    </div>

  </div>
  <CommonFooter/>
</div>
);
}
}


