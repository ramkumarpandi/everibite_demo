import React, { Component } from "react";
import cardImg from "./images/biriyanilarge.png";
import { Button,Media } from "react-bootstrap";
import Icon from "react-icons-kit";
import { outlined } from "react-icons-kit/entypo/outlined";
import { ic_grade } from "react-icons-kit/md/ic_grade";
import avatar from './images/avatar-male.png';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
	let dateTag = new Date(); 
    return (
      <div className="watermark">
        <div className="card mx-auto mt-5" style={{ width: "600px" }}>
          <img
            className="card-img-top"
            src={cardImg}
            alt="Cardicon"
            style={{ width: "100%" }}
          />
          <div className="card-body watermark">
            <h3 className="card-title">
              Hyderabadi Chicken Biryani With Raita
              <span className="float-right">
                <Icon icon={outlined} size={21} className="mr-2 float-left" />
                <span className="p-2 bg-success text-white font-weight-bold float-left rounded mb-2">
                  <Icon icon={ic_grade} size={14} className="float-left mr-1" />
                  <span style={{ fontSize: "0.7em", float: "left" }}>5.0</span>
                </span>
              </span>
            </h3>

            <div style={{ clear: "both" }}>
              <div className="border border-danger p-1 d-inline-block float-right my-1 mr-2">
                <div
                  className="bg-danger"
                  style={{ width: "7px", height: "7px", borderRadius: "50%" }}
                />
              </div>
            </div>

            <div style={{ clear: "both", marginTop: "25px" }}>
              <div className="float-left">
                <h5 className="mt-1">Price</h5>
                <h5
                  className="text-success font-weight-bold"
                  style={{ fontSize: "1.8em" }}
                >
                  &#8377;220
                </h5>
              </div>
              <div className="float-right">
                <Link to="/Checkout"><Button bsSize="large" bsStyle="success" className="px-5 py-3">
                  ADD TO CART
                </Button></Link>
              </div>
            </div>
          </div>

	<div className="row watermark">
		<div className="col-md-8">
    <div className="clearfix">
    <div className="float-left">
    <div><p className="text-success ml-4 mb-0"><span style={{fontSize:'1.3em'}}>5 &#9733;</span></p></div>
    </div>
  <div className="float-left mt-2 ml-2">
         <div className="bg-success d-inline-block" style={{width: '150px', height: '8px', borderRadius:'20px'}}></div>
         <span className="ml-2 text-success">46%</span>
    </div>
    </div>
    <div className="clearfix">
    <div className="float-left">
    <div><p className="text-success ml-4 mb-0"><span style={{fontSize:'1.5em'}}>4 &#9733;</span></p></div>
    </div>
  <div className="float-left mt-2 ml-2">
         <div className="bg-success d-inline-block" style={{width: '120px', height: '8px', borderRadius:'20px'}}></div>
         <span className="ml-2 text-success">31%</span>
    </div>
    </div>
    <div className="clearfix">
    <div className="float-left">
    <div><p className="text-success ml-4 mb-0"><span style={{fontSize:'1.5em'}}>3 &#9733;</span></p></div>
    </div>
  <div className="float-left mt-2 ml-2">
         <div className="bg-success d-inline-block" style={{width: '90px', height: '8px', borderRadius:'20px'}}></div>
         <span className="ml-2 text-success">20%</span>
    </div>
    </div>
    <div className="clearfix">
    <div className="float-left">
    <div><p className="text-success ml-4 mb-0"><span style={{fontSize:'1.5em'}}>2 &#9733;</span></p></div>
    </div>
  <div className="float-left mt-2 ml-2">
         <div className="bg-success d-inline-block" style={{width: '60px', height: '8px', borderRadius:'20px'}}></div>
         <span className="ml-2 text-success">8%</span>
    </div>
    </div>
    <div className="clearfix">
    <div className="float-left">
    <div><p className="text-success ml-4 mb-0"><span style={{fontSize:'1.5em'}}>1 &#9733;</span></p></div>
    </div>
  <div className="float-left mt-2 ml-2">
         <div className="bg-success d-inline-block" style={{width: '30px', height: '8px', borderRadius:'20px'}}></div>
         <span className="ml-2 text-success">4%</span>
    </div>
    </div>
    </div>
		<div className="col-md-4 pt-5 mt-5"><button type="button" className="btn btn-outline-success px-4 py-3 float-right font-weight-bold mr-4">Write a review</button></div>
	
  </div>
<h4 className="ml-4 mt-4">Customer Reviews</h4>
<Media className="mx-4 mt-2 watermark">
    <Media.Left>
      <img width={40} height={40} src={avatar} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>
		<h5>Arjun</h5>
		<p className="text-success font-weight-bold"><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span></p>
	</Media.Heading>
    </Media.Body>
  </Media>
  <p className="p-1 mx-4 mb-1">{dateFormat(dateTag,"d mmm yyyy")}</p>
<p className="border-bottom border-muted mx-4 pb-3">Great food with amazing packing. The Raita was perfect, Biryani was well cooked and good amount of veggies thrown in. </p>
<Media className="mx-4">
    <Media.Left>
      <img width={40} height={40} src={avatar} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>
		<h5>Rahul</h5>
		<p className="text-success font-weight-bold"><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span></p>
	</Media.Heading>
    </Media.Body>
  </Media>
  <p className="p-1 mx-4 mb-1">{dateFormat(dateTag,"d mmm yyyy")}</p>
<p className="border-bottom border-muted mx-4 pb-3">Great food with amazing packing. The Raita was perfect, Biryani was well cooked and good amount of veggies thrown in. </p>
<Media className="mx-4 watermark">
    <Media.Left>
      <img width={40} height={40} src={avatar} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>
		<h5>Vihan</h5>
		<p className="text-success font-weight-bold"><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span></p>
	</Media.Heading>
    </Media.Body>
  </Media>
  <p className="p-1 mx-4 mb-1">{dateFormat(dateTag,"d mmm yyyy")}</p>
<p className="border-bottom border-muted mx-4 pb-3">Great food with amazing packing. The Raita was perfect, Biryani was well cooked and good amount of veggies thrown in. </p>
<p className="text-center text-success">See All 13 Reviews</p>
        </div>
      </div>
    );
  }
}

