import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biryani from './images/biriyani.png';
import './EveribiteStyle.css';

export default class OffersDeals extends Component{

	render(){

var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
		return(
			<div className="container"> 
<div className="row watermark">
	<div className="col-md-1 mt-5">
	<p className="everibiteViga offers mt-4">Offers & Deals</p>
	</div>
<div className="col-md-11">
	<Slider {...settings} className="mb-3">
        <div className="thumbnail w-100 h-50">
          <img src={biryani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biryani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biryani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biryani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biryani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
         <img src={biryani} alt="carousel"/>
        </div>
      </Slider>
</div>
</div>
				
		        </div>
		);
	}
}
