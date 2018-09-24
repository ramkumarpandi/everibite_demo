import React,{ Component } from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
//import './Current.css';
import Icon from 'react-icons-kit';
import {iosArrowThinRight} from 'react-icons-kit/ionicons/iosArrowThinRight';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline';
import {iosHomeOutline} from 'react-icons-kit/ionicons/iosHomeOutline';
import {iosStopwatch} from 'react-icons-kit/ionicons/iosStopwatch';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';
export default class Current extends Component
{

render()
	{
	
		let now = new Date();	

	return(
		<div className="Current watermark">
			
			<Grid className="mt-5">
   <Row className="show-grid border border-success  rounded mb-5 watermark">
      <Col  md={8}>
      <div className="mt-3">
         <p>Order No #
         <h4 className="d-inline-block ml-1">408973455</h4>
         </p>
         <p>Hydrebadi Chicken Briyani with Raita x1 | Hydrebadi Mutton Briyani with Raita x1</p>
         <p className="d-inline-block">
            <Icon icon={iosHomeOutline}  className="text-success"/>
            Briyani Paradise,Wilson Garden
            <Icon icon={iosArrowThinRight} className="text-success"/>
            <Icon icon={iosLocationOutline}/>
            12/3 Krishna Enclave,Gopalapuram,#rd Street,
         </p>
         <div className="progressBarModal watermark">
            <div className="progress">
               <div className="progress-bar-success progress-bar-striped active massive-font" role="progressbar" aria-valuenow="10" aria-valuemin="20" aria-valuemax="100" style={{width:'20%'}}>
               </div>
            </div>
         </div>
         <h6 className="text-success font-weight-bold">Restaurant is preparing your food</h6>
      </div>
      </Col>
      <Col  md={4} className="p-3" >
      <div className="float-right text-right p-3 watermark">
         <p>{dateFormat(now)}</p>
         <h5 className="text-success font-weight-bold">Price: &#8377;509</h5>
         <h6>Payment Bank Card-Sucessful</h6>
         <p className="text-success font-weight-bold" style={{fontSize:'1.5em'}}>
            <span className="icon text-success">
               <Icon icon={iosStopwatch} size={25}/>
            </span>
            51 mins <Link to="/OrdersCopy"><Button bsStyle="success">TRACK ORDER</Button></Link>
         </p>
      </div>
      </Col>
   </Row>
   <Row className="show-grid border border-success  rounded mb-5 watermark">
      <Col  md={8}>
      <div className="mt-3">
         <p>Order No #
         <h4 className="d-inline-block ml-1">408973455</h4>
         </p>
         <p>Hydrebadi Chicken Briyani with Raita x1 | Hydrebadi Mutton Briyani with Raita x1</p>
         <p className="d-inline-block">
            <Icon icon={iosHomeOutline}  className="text-success"/>
            Briyani Paradise,Wilson Garden
            <Icon icon={iosArrowThinRight} className="text-success"/>
            <Icon icon={iosLocationOutline}/>
            12/3 Krishna Enclave,Gopalapuram,#rd Street,
         </p>
         <div className="progressBarModal watermark">
            <div className="progress">
               <div className="progress-bar-success progress-bar-striped active massive-font" role="progressbar" aria-valuenow="10" aria-valuemin="20" aria-valuemax="100" style={{width:'20%'}}>
               </div>
            </div>
         </div>
         <h6 className="text-success font-weight-bold">Restaurant is preparing your food</h6>
      </div>
      </Col>
      <Col  md={4} className="p-3" >
      <div className="float-right text-right p-3 watermark">
         <p className="p-3">{dateFormat(now,"fullDate")} |  {dateFormat(now,"shortTime")}</p>
         <h5 className="text-success font-weight-bold">Price: &#8377;509</h5>
         <h6>Payment Bank Card-Sucessful</h6>
         <p className="text-success font-weight-bold" style={{fontSize:'1.5em'}}>
            <span className="icon text-success">
               <Icon icon={iosStopwatch} size={25}/>
            </span>
            51 mins <Link to="/OrdersCopy"><Button bsStyle="success">TRACK ORDER</Button></Link>
         </p>
      </div>
      </Col>
   </Row>
</Grid>


		

		
		</div>



		);


	}

}

