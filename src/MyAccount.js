import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './MyAccount.css';
import './Footer.css';
import './NavBar.css';
import avatar from './images/avatar.jpeg';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
import './EveribiteStyle.css';

export default class MyAccount extends Component{
state={address:[{id:1,logo:'glyphicon glyphicon-ok-circle',place:'Home',addr:'45A,EastStreet',city:'Ramanathapuram'},
{id:2,logo:'glyphicon glyphicon-ok-circle',place:'Work',addr:'25A,West Street',city:'Sungam'},
{id:3,logo:'glyphicon glyphicon-ok-circle',place:'Others',addr:'5A,North Street',city:'Singanallur'},
{id:4,logo:'glyphicon glyphicon-ok-circle',place:'Others',addr:'55A,South Street',city:'Race Course'}]};
render(){
return(
<div>
  <NavBar1/>
  <div className="container">
    <p className="mt-3">Home/Coimbatore/Checkout</p>
    <div className="row mt-5">
      <div className="col-md-9 shadow p-3 mb-5 bg-white rounded">
        <div className="accountInfo p-4">
          <p className="everibiteViga font18 AccInfo">My Account</p>
          <div className="media">
            <img className="mr-3 rounded-circle accountLogo" src={avatar} alt="avatar"/>
            <div className="media-body">
              <h5 className="mt-3 mb-0 everibiteRobotoRegular font16 custName">Marry John</h5>
              <Link to="/ProfileUpdate" className="everibiteRobotoMedium font12 editProfile">Edit Profile</Link>
            </div>
          </div>
          <div>
            <Button className="btn continueOrder px-4 py-3 mr-3 everibiteViga float-right">
            Change Password
            </Button>
            <div>
                  <p className="mt-4 personInfo">
                    Email ID{" "}
                    <span className="ml-5 pl-5 personDetail">abc@abc.com</span>
                  </p>
                  <p className="personInfo">
                    Mobile Number{" "}
                    <span className="ml-4 personDetail">+91-9234567800</span>
                  </p>
                </div>
          </div>
        </div>
        <hr className="shadow bg-white"/>
        <div className="p-4">
          <p className="everibiteViga font18 deliveryInfo mb-0">Your Locations</p>
          <div className="row">
            {this.state.address.map(addLoc => (
            <div className="col-md-4 m-3 addr" key={addLoc.id}>
              <p className="float-right mt-2" ><span className={addLoc.logo}></span></p>
              <p className="everibiteRobotoMedium font14">{addLoc.place}</p>
              <p className="ml-3 everibiteRobotoMedium font14" >{addLoc.addr}</p>
              <p className="ml-3 everibiteRobotoMedium font14">{addLoc.city}</p>
            </div>
            ))}
          </div>
          <Link to="/NewAddress"><Button className="btn-lg mr-3 float-right addNew everibiteViga font14">
                  Add New               
                </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <CommonFooter/>
</div>
);
}
}


