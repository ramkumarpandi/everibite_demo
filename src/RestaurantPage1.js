import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import NavBar1 from './NavBar1';
import Search from './Search';
import CommonFooter from './CommonFooter';
import DisplayRestaurant1 from './DisplayRestaurant1';
import SideNavRest from './SideNavRest';

export default class RestaurantPage1 extends Component{

render(){
return(
<div>
	<NavBar1/>
	<Search/>
	<DisplayRestaurant1/>
<Grid className="container mt-3">

<Row className="show-grid">
   <Col  md={12}>
	<SideNavRest/>    
   </Col>
   </Row>

</Grid>
	<CommonFooter/>
</div>

);
}
}
