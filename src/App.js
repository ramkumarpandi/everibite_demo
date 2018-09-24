import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route }from 'react-router-dom';
import Main from './Main';
import MyAccount from './MyAccount';
import RegistrationProcess from './RegistrationProcess';
import OrdersCopy from './OrdersCopy';
import UserFeedback from './UserFeedback';
import OrderCopy from './OrderCopy';
import ProfilePopup from './ProfilePopup';
import Checkout from './Checkout';
import Vieworder from './Vieworder';
import LandingPage from './LandingPage';
import RestaurantPage from './RestaurantPage';
import RestaurantPage1 from './RestaurantPage1';
import RestaurantPage2 from './RestaurantPage2';
import Review from './Review';
import HotelCart from './HotelCart';
import ProfileUpdate from './ProfileUpdate';
import ForgotPassword from './ForgotPassword';
import NewAddress from './NewAddress';

class App extends Component {
  render() {
    return (
<Router>
      <div className="App">
	<Route path="/" exact component={Main}/>
	<Route path="/MyAccount" component={MyAccount}/>
	<Route path="/RegistrationProcess" component={RegistrationProcess}/>
	<Route path="/OrdersCopy" component={OrdersCopy}/>
	<Route path="/UserFeedback" component={UserFeedback}/>
	<Route path="/OrderCopy" component={OrderCopy}/>
	<Route path="/ProfilePopup" component={ProfilePopup}/>
	<Route path="/Checkout" component={Checkout}/>
	<Route path="/Vieworder" component={Vieworder}/>
	<Route path="/LandingPage" component={LandingPage}/>
	<Route path="/RestaurantPage" component={RestaurantPage}/>
	<Route path="/RestaurantPage1" component={RestaurantPage1}/>
	<Route path="/RestaurantPage2" component={RestaurantPage2}/>
	<Route path="/Review" component={Review}/>
	<Route path="/HotelCart" component={HotelCart}/>
	<Route path="/ProfileUpdate" component={ProfileUpdate}/>
	<Route path="/ForgotPassword" component={ForgotPassword}/>
	<Route path="/NewAddress" component={NewAddress}/>
      </div>
</Router>
    );
  }
}

export default App;
