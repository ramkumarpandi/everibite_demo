import React,{ Component } from 'react';
import {Media,Button} from 'react-bootstrap';
import Dollar from'./images/imagel.png';
import {Link} from 'react-router-dom';
import './EveribiteStyle.css';
export default class OrderHeader extends Component
{
	render()
		{
			return(
					<div className="watermark">
					<section className="mb-2 clearfix">
					<div className="float-right mt-3 everibiteRobotoRegular wordColor text-right">
						<p className="font16 mb-0">Your Order number #</p>
						<p className="font32 mb-0" style={{letterSpacing:'0.1px'}}>408973455</p>
						<p className="font14 mb-0">{Date()}</p>
						<Link to="/OrdersCopy">
							<Button className="trackOrder px-4 py-3 mt-2">TRACK ORDER</Button>
						</Link>
					</div>
					 <Media>
					    <Media.Left>
					     <img width={115} height={121} src={Dollar} alt="thumbnail" />
					    </Media.Left>
					    <Media.Body>
					     <Media.Heading className="mt-4 everibiteViga font24">
						 <p className="thankyou">Thank you !..</p>
						 <p className="wordColor">Your order is Confirmed</p>
						 </Media.Heading>
					    </Media.Body>
					  </Media>
					  </section>					
					<hr/>				
					</div>
				);

		}






}
