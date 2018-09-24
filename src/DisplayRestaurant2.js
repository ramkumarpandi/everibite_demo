import React, { Component } from 'react';
import { Media,Button,Grid,Row,Col } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import {outlined} from 'react-icons-kit/entypo/outlined';
import {ic_grade} from 'react-icons-kit/md/ic_grade';
import {ic_sentiment_satisfied} from 'react-icons-kit/md/ic_sentiment_satisfied';
import {ic_chat_bubble} from 'react-icons-kit/md/ic_chat_bubble';
import {iosStopwatch} from 'react-icons-kit/ionicons/iosStopwatch';
import paradise from './images/paradise.png';
import para from './images/para.png';
import biryani from './images/rice.jpg';
import { Link } from 'react-router-dom';

export default class DisplayRestaurant1 extends Component{

render(){
return(
<div className="container watermark">
	<div className="item shadow bg-white p-3 mb-3 rounded watermark">
		<Media>
    <Media.Left>
      <img width={250} height={200} src={biryani} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>
		<h2 className="d-inline-block">Hyderabadi Chicken Biryani With Raita</h2><span className="float-right"><Icon icon={outlined} size={18} className="float-left mr-1"/><span>Add To Fav</span></span>
<h4>South Indian,Biryani</h4>
	</Media.Heading>
      <p>
      This Hyderabad specialty should be a must try on your next visit to a South Indian eatery. Chunks of fresh meat are cooked with curd, saffron, butter and piquant spices and then tossed into the semi-boiled rice layered with mint, fried onions, and Chicken.
      </p>
	<span className="p-2 bg-success text-white font-weight-bold float-left rounded mb-2"><Icon icon={ic_grade} className="float-left mr-1"/><span style={{fontSize:'1.2em'}}>5.0</span></span>
<div style={{clear:'both'}}><div className="border border-danger p-1 d-inline-block"><div className="bg-danger" style={{width:'7px',height:'7px',borderRadius:'50%'}}></div></div></div>
    <div className="mt-3">
      <p className="float-left"><h5>Price</h5><h5 className="text-success font-weight-bold" style={{fontSize:'1.8em'}}>&#8377;220</h5></p>
      <p className="float-right">
        <span className="float-left mt-3 mr-4"><Icon icon={ic_chat_bubble} className="text-success float-left mr-1" size={27}/><Icon icon={ic_sentiment_satisfied} className="text-white" style={{marginLeft:'-24px',marginTop:'3px'}}/> 13 Customer Reviews</span>
        <Link to="/Checkout"><Button className="p-3 btn-success float-right mt-1">ADD TO CART</Button></Link>
      </p>
    </div>
    </Media.Body>
  </Media>
	</div>
	<div className="hotel shadow bg-white p-3 mb-3 rounded watermark">
  <Grid className="mt-5 container">
<Row>

<Col md={7} className="border-right border-muted">
<Media>
    <Media.Left align="middle">
      <img width={200} height={100} src={paradise} alt="thumbnail" />
    </Media.Left>
    <Media.Body className="ml-4">
      <Media.Heading><h3>Biryani Paradise</h3></Media.Heading>
      <p style={{fontSize:'1.3em'}}>
       Wilson Garden, Bangalore
      </p>
      <p className="mb-0">	<span className="p-2 bg-success text-white font-weight-bold float-left rounded mb-2"><Icon icon={ic_grade} className="float-left mr-1"/><span style={{fontSize:'1.2em'}}>5.0</span></span>
      <p className="text-success font-weight-bold d-inline-block ml-4" style={{fontSize:'1.5em'}}>
           <span className="icon text-success">
              <Icon icon={iosStopwatch} size={25} className="float-left"/>
           </span>
           51 mins
        </p>
      </p>
      <p style={{clear:'both',fontSize:'1.5em'}}>
        South Indian, Biryani
      </p>
    </Media.Body>
  </Media>
</Col>
<Col md={5}>
  {/*<img src={discount} alt="offers"/><span className="text-muted ml-2" style={{fontSize:'1.3em'}}>Offers</span>*/}
  <img src={para} alt="offers" className="d-block"/>
</Col>
</Row>
</Grid>
</div>
<form>
<input type="search" placeholder="Search other dishes in this restaurant" className="w-25 mr-3"/>
<p className="d-inline-block"><input type="checkbox"/><span>Veg Only</span></p>
</form>
</div>

);
}
}
