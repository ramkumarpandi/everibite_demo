import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic1 from './images/findfood.png';
import pic2 from './images/diamond.png';
import pic3 from './images/better.png';
import pic4 from './images/offers.png';
import locateme from './images/locateme.png';
import './Main.css';
import './Footer.css';
import './NavBar.css';
import './EveribiteStyle.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Carousel,Media,Button } from 'react-bootstrap';
export default class Main extends Component{
render(){
return(
<div>
  <NavBar/>
<div>
  <div className="mainBg p-5">
    <div className="row watermark">
      <div className="bg-white text-left col-md-7 shadow mb-5 bg-white rounded mt-4 ml-5 watermark" style={{padding:'4rem'}}>
        <h1 className="everibiteViga everibiteBetter font32">A Better Way To Get Your Food</h1>
        <h3 className="everibiteRobotoLight everibiteOrder font18">Order Your Favourite Food From Restaurants Near You</h3>
<div className="formBorder my-2">        
<form className="form-inline border border-success p-1">
	<span className="glyphicon glyphicon-map-marker mr-2" style={{fontSize:'1.5em'}}></span>
	<input type="search" className="form-control form-control-lg p-2 text-success w-75 my-1 border-0" id="search" placeholder="Enter Your Location"/>
	<button type="submit" className="btn btn-lg ml-1 findBite everibiteViga">Find Your Bite</button>	         
        </form>
</div>
<h4><img src={locateme} alt="locateMe"/><Link to="" className="ml-1 locateme everibiteRobotoMedium" style={{color:'#333'}}>Locate Me</Link></h4>
          <p className="locateBelow everibiteRobotoMedium">Identify your location and help us to provide you the best food options near your location.</p>
      </div>
    </div>
  </div>
  <div className="bg-white watermark">
    <Carousel>
      <Carousel.Item>
        <div className="bg-white clearfix watermark">
          <div className="d-inline-block col-md-4 ml-5 item1">
            <h1>How Everibite works for you !!</h1>
            <h1>Ordering your favourite food</h1>
            <h1>is even easier than eating.</h1>
          </div>
          <div className="d-inline-block col-md-3 mt-5 item2">
            <h2 className="text-success">Find Your Food</h2>
            <h4>Search your favourite food or local</h4>
            <h4>restarunts, Receipes, Cusines and read</h4>
            <h4>the review and check rating of the food.</h4>
          </div>
          <div className="d-inline-block col-md-3 item3 float-right"><img src={pic1} alt="findfoodImg"/></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white clearfix watermark">
          <div className="col-md-5 third-col">                         
          </div>
          <div className="col-md-2 everibiteViga font32 text-center pt-5">
          <h1 className="beforeFood">Food </h1>
            <h1>Is The</h1>
            <h1>Ingredient</h1>
            <h1>That</h1>
            <h1>Binds US</h1>
            <h1 className="afterFood">TOGETHER</h1>
          </div>
          <div className="col-md-5 first-col">      
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white clearfix watermark">
          <div className="col-md-9 carouselImg p-0 last-col">
          </div>
          <div className="col-md-3 everibiteViga font32 text-right pt-5" style={{paddingRight:'9rem'}}>
            <h1 className="beforeFood">Food </h1>
            <h1>Is The</h1>
            <h1>Ingredient</h1>
            <h1>That</h1>
            <h1>Binds Us</h1>
            <h1 className="afterFood">TOGETHER</h1>
          </div>        
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  <div className="container mt-5 watermark">
    <h1 className="everibiteViga whyOrder font32">Why Order With Everibite?</h1>
    <div className="row">
      <div className="col-md-4">
        <Media>
          <Media.Left>
            <img width={100} height={100} src={pic2} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h1 className="everibiteViga DBOHeading font32">Discover</h1>
            </Media.Heading>
            <p className="everibiteRobotoRegular DBOText font16">
              We'll help you find hidden modules gems in your neighbourhood and taste of you like to bite off.
            </p>
          </Media.Body>
        </Media>
      </div>
      <div className="col-md-4">
        <Media>
          <Media.Left>
            <img width={100} height={100} src={pic3} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h1 className="everibiteViga DBOHeading font32">Better</h1>
            </Media.Heading>
            <p className="everibiteRobotoRegular DBOText font16">
              The more you use Everibite and review your order better we are at making recommendations just for you.
            </p>
          </Media.Body>
        </Media>
      </div>
      <div className="col-md-4">
        <Media>
          <Media.Left>
            <img width={100} height={100} src={pic4} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h1 className="everibiteViga DBOHeading font32">Offers</h1>
            </Media.Heading>
            <p className="everibiteRobotoRegular DBOText font16">
              Enjoy each bite and support local business by reviews and feedback and get offers and get coupon codes.
            </p>
          </Media.Body>
        </Media>
      </div>
    </div>
    <h1 className="text-center mt-5 pt-5 everibiteViga font32">Register Your Restaurant With Us</h1>
    <h2 className="text-center mt-3 findCust everibiteRobotoLight watermak"><p>The better way to find the customer who loves your food</p><p>and taste to increase regular customers.</p></h2>
<center><Button className="mb-4 everibiteViga font18 getInTouch btn-lg">Get In Touch With Us Now</Button></center>
  </div>
</div>
  <Footer/>
</div>
);
}
}


