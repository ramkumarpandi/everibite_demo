import React, { Component } from 'react';
import {Tab,Row,Col,Nav,NavItem} from 'react-bootstrap';
import Result from './Result';
import Result1 from './Result1';
import Result2 from './Result2';
import './sideBar.css';
import './EveribiteStyle.css';

export default class SideNavLanding extends Component{
render(){
return(
<Tab.Container id="left-tabs-example" defaultActiveKey="topdish" className="sideBar">
  <Row className="clearfix watermark">
    <Col sm={2} className="px-2">
      <Nav bsStyle="pills" stacked className="sideNavText">
        <NavItem eventKey="topdish">Top Dishes</NavItem>
        <NavItem eventKey="topbf">Top Breakfast
		    <p className="everibiteRobotoRegular font12 mb-0 mt-1">Mostly ordered and healthy breakfast recommended for you !!</p>
	      </NavItem>
        <NavItem eventKey="recommended">Recommended For You</NavItem>
        <NavItem eventKey="recentorder">Recent Orders</NavItem>
        <NavItem eventKey="gems">Gems in your Locality</NavItem>
        <NavItem eventKey="trynew">Try New</NavItem>
      </Nav>
    </Col>
    <Col sm={10}>
      <Tab.Content animation>
        <Tab.Pane eventKey="topdish"><Result/></Tab.Pane>
        <Tab.Pane eventKey="topbf"><Result1/></Tab.Pane>
        <Tab.Pane eventKey="recommended"><Result2/></Tab.Pane>
        <Tab.Pane eventKey="recentorder"><Result/></Tab.Pane>
        <Tab.Pane eventKey="gems"><Result1/></Tab.Pane>
        <Tab.Pane eventKey="trynew"><Result2/></Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
);
}
}
