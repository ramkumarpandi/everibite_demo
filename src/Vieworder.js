import React from 'react';
import {Grid,Col} from 'react-bootstrap';
import NavBar1 from './NavBar1';
import CommonFooter from './CommonFooter';
import ViewTab from './ViewTab';
const ViewOrder = ({match}) =>
(


	
				
				<div>

					
					<NavBar1/>
					<Grid className="mt-5 container mb-5 watermark">							
					<Col md={9} className="bg-white">
							<ViewTab/>
							</Col>

					</Grid>
				<CommonFooter/>

				</div>
				
				

				);
	

export default ViewOrder;

