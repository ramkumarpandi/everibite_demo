import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import NavBar1 from './NavBar1';
import OffersDeals from './Offers&Deals';
import SideNavLanding from './SideNavLanding';
import Search from './Search';
import CommonFooter from './CommonFooter';

export default class LandingPage extends Component{

render(){
return(
<div>
	<NavBar1/>
	<Search/>
	<OffersDeals/>

<Grid className="container">

<Row className="show-grid">
   <Col  md={12}>
	<SideNavLanding/>    
   </Col>
	
   </Row>

</Grid>


<CommonFooter/>
</div>

);
}
}
