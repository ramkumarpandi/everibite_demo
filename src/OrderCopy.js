import React,{ Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import NavBar1 from './NavBar1';
import OrderHeader from './OrderHeader';
import OrderDone from './OrderDone';
import OrderInfo from './OrderInfo';
import OrderLoc from './OrderLoc';
import CommonFooter from './CommonFooter';
export default class OrderCopy extends Component
{



	render()

		{

			return(
				<div>
				<NavBar1/>
				<Grid className="mt-5 container">
				<Col md={12} className="bg-white">

				 <Row className="show-grid">
				    <Col  md={12}>
				      <OrderHeader/>
				    </Col>
				    </Row>
				<Row>

				<Col md={6} className="border-right border-muted"><OrderInfo/></Col>
				<Col md={6}><OrderLoc/></Col>

				</Row>
				<OrderDone/>

				</Col>
				 
				</Grid>
				<CommonFooter/>
				</div>
				);

		}






}
