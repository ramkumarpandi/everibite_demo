import React, { Component } from 'react';
import "./LandingPage.css";
import biryani from './images/biriyani.png';
import {Link} from 'react-router-dom';
import Icon from 'react-icons-kit';
import {ic_grade} from 'react-icons-kit/md/ic_grade';
import {ic_chat_bubble} from 'react-icons-kit/md/ic_chat_bubble';
import {ic_sentiment_satisfied} from 'react-icons-kit/md/ic_sentiment_satisfied';
import shop from './images/shop.png';
import heart from './images/heart1.png';
import heartFilled from './images/filledheart.png'

export default class Result extends Component{

state={
imgs:[
{id:1,title:"food", desc:"Hyderabadi Chicken Biryani with Raita", menutype:"South Indian Biryani",src1:biryani, restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:2,title:"food", desc:"Hyderabadi Chicken Biryani with Raita",  menutype:"South Indian Biryani",src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:3,title:"food", desc:"Hyderabadi Chicken Biryani with Raita",  menutype:"South Indian Biryani",src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:4,title:"food", desc:"Hyderabadi Chicken Biryani with Raita",  menutype:"South Indian Biryani",src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:5,title:"food", desc:"Hyderabadi Chicken Biryani with Raita", menutype:"South Indian Biryani", src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:6,title:"food", desc:"Hyderabadi Chicken Biryani with Raita", menutype:"South Indian Biryani", src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:7,title:"food", desc:"Hyderabadi Chicken Biryani with Raita", menutype:"South Indian Biryani", src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:8,title:"food", desc:"Hyderabadi Chicken Biryani with Raita", menutype:"South Indian Biryani", src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
{id:9,title:"food", desc:"Hyderabadi Chicken Biryani with Raita", menutype:"South Indian Biryani", src1:biryani,restaurant:"Biryani Paradise, Willson Garden",price:220},
],
iconShow:true
};/*
imgClick(){
	console.log("clicked");
	this.setState({iconShow:!this.state.iconShow})
}*/
	render(){
		var icon=this.state.iconShow?heart:heartFilled;
		return(
			<div className="watermark"> 
					{this.state.imgs.map(imgs=>(
						<div className="col-md-4 watermark" key={imgs.id} >{/*onClick={this.imgClick.bind(this)}*/}
							<div className="card p-2 mb-4 cards" style={{width:'300px',height:'335px'}}>
							
							<div className="itemImg">
							<img src={imgs.src1} alt={imgs.title} width={150} height={180} className="card-img-top"/>
							<img src={icon} alt="heartImg" className="filledHeart"/>
							</div>

							<div className="card-body">
							<div className="clearfix mb-0">
								<p className="clearfix"><span className="card-title float-left mb-0 pt-2 menuName">{imgs.desc}</span>
								<span className="float-right">
								<span className="p-2 bg-success text-white font-weight-bold float-left rounded"><Icon icon={ic_grade} className="float-left mr-1"/><span style={{fontSize:'1.2em'}}>5.0</span></span>
								</span>
								<br/>
								<span className="float-right">
								<span className="float-left"><Icon icon={ic_chat_bubble} className="text-success float-left mr-1" size={27}/><Icon icon={ic_sentiment_satisfied} className="text-white" style={{marginLeft:'-24px',marginTop:'3px'}}/><span className="ml-2">13</span></span>
								</span>
								</p>
								<div className="clearfix"><span className="float-left menuType">{imgs.menutype}</span>
								<div className="float-right">
								<div style={{clear:'both'}}><div className="border border-danger d-inline-block" style={{padding:'2px'}}><div className="bg-danger" style={{width:'7px',height:'7px',borderRadius:'50%'}}></div></div></div>	
								</div>
								</div>
								<p className="clearfix mb-1">
								<span className="float-left mt-2 restName"><img src={shop} alt="ShopIcon"/>{imgs.restaurant}</span>
								<span className="float-right"><span className="text-success font-weight-bold" style={{fontSize:'1.8em'}}>&#8377;{imgs.price}</span></span>
								</p>
							</div>
							<div className="clearfix hoverShow everibiteViga font14">
								<span className="float-left" style={{color:'#333'}}>Quick View</span>
								<Link to="/RestaurantPage"><span className="float-right" style={{color:'#2a830c'}}>Add To Cart</span></Link>
							</div>
						
							</div>
							</div>
						</div>
					))}
					
		        </div>
		);
	}
}
