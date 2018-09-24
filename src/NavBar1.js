import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from './images/everibiteLogo.png';
import './NavBar.css';
export default class NavBar1 extends Component
{
render()
{
return(
<Navbar default collapseOnSelect className="everibiteRobotoBold watermark">
  <Navbar.Header>
    <Navbar.Brand>
      <Link to={"/"}>
      <img src={logo} alt="LogoImg"/></Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  {/*<Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}><Link to="/">
        Home</Link>
      </NavItem>
      <NavItem eventKey={2}><Link to="/MyAccount">
        MyAccount</Link>
      </NavItem>
<NavItem eventKey={3}><Link to="/RegistrationProcess">
        Registration</Link>
      </NavItem>
	<NavItem eventKey={4}><Link to="/OrdersCopy">
        OrdersCopy</Link>
      </NavItem>
<NavItem eventKey={5}><Link to="/UserFeedback">
        UserFeedback</Link>
      </NavItem>
<NavItem eventKey={6}><Link to="/OrderCopy">
       OrderCopy</Link>
     </NavItem>
<NavItem eventKey={7}><Link to="/ProfilePopup">
       ProfilePopup</Link>
     </NavItem>
<NavItem eventKey={8}><Link to="/Checkout">
       Checkout</Link>
     </NavItem>
<NavItem eventKey={9}><Link to="/Vieworder">
       Vieworder</Link>
     </NavItem>
<NavItem eventKey={10}><Link to="/LandingPage">
       LandingPage</Link>
     </NavItem>
<NavItem eventKey={11}><Link to="/RestaurantPage">
       RestaurantPage</Link>
     </NavItem>
<NavItem eventKey={12}><Link to="/Review">
       Review</Link>
     </NavItem>
<NavItem eventKey={13}><Link to="/HotelCart">
       HotelCart</Link>
     </NavItem>
    </Nav>
  </Navbar.Collapse>*/}
</Navbar>
);
}
}


