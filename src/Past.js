import React,{ Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
//import './Current.css';
import Icon from 'react-icons-kit';
import {iosArrowThinRight} from 'react-icons-kit/ionicons/iosArrowThinRight';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline';
import {iosHomeOutline} from 'react-icons-kit/ionicons/iosHomeOutline';
import dateFormat from 'dateformat';
export default class Past extends Component
{

render()
	{
		let now = new Date();	

	return(

		<div>
		
		<Grid className="mt-5">
   <Row className="show-grid border border-success  rounded mb-5">
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

      </div>
      </Col>
      <Col  md={4} className="p-3" >
      <div className="float-right text-right p-3">
         <p>{dateFormat(now)}</p>
         <h5 className="text-success font-weight-bold">Price: &#8377;509</h5>
         <h6>Payment Bank Card-Sucessful</h6>
      </div>
      </Col>
   </Row>
   <Row className="show-grid border border-success  rounded mb-5">
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
      </div>
      </Col>
      
	<Col  md={4} className="p-3" >
      <div className="float-right text-right p-3">
         <p>{dateFormat(now)}</p>
         <h5 className="text-success font-weight-bold">Price: &#8377;509</h5>
         <h6>Payment Bank Card-Sucessful</h6>
      </div>
      </Col>
   </Row>
</Grid>

		
		
		</div>



		);


	}





}

