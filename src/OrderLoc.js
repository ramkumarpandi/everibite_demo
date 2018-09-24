import React,{ Component } from 'react';
import Map from'./images/map.png';
import {Media} from 'react-bootstrap';
export default class OrderLoc extends Component
{



	render()

		{

			return(

					<div className="watermark">			
					<h4 className="everibiteVigaRegular font18 deliveryLoc">Delivery Location</h4>					
					<img src={Map} width={300} height={180} className="mt-3" alt="locationMap"/>
					<div className="everibiteRobotoRegular wordColor font14 mt-3 addressText">
					<p>Indtechsoft, kvb atm</p>
					<p>trichy road, nadar colony</p>
					<p>highways colony, gopalapuram,</p>
					<p>Coimbatore-641018, TN</p>
					</div>
					<div>
					<p className="everibiteViga font18 mt-5 payInfo">Payment Information</p>
					<p className="font14 wordColor"><span className="everibiteRobotoRegular">Payment Method: </span><span className="everibiteRobotoMedium">Credit Card/Debit Card</span></p>
					<Media>
					    <Media.Left>
					     <span className="glyphicon glyphicon-credit-card wordColor" style={{fontSize:'1.5em'}}></span>
					    </Media.Left>
					    <Media.Body>
					     <Media.Heading className="everibiteRobotoMedium font14 wordColor mb-0"><p>5648 xxxx xxxx 5003</p></Media.Heading>
					     <p className="everibiteRobotoRegular font14 wordColor mb-0">Visa</p>
						
					      
					    </Media.Body>
					  </Media>
					</div>
					</div>

				);

		}
}
