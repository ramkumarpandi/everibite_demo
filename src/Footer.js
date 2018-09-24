import React, { Component } from 'react';
import './Footer.css';
import { Button, FormControl } from "react-bootstrap";
import footerLogo from './images/footerLogo.png';
import Icon from 'react-icons-kit';
import {twitter, facebook, instagram, pinterest} from 'react-icons-kit/fa/';

export default class Footer extends Component{
render(){
return(
<div className="footer py-5 px-4">
  <footer className="container-fluid">
    <div className="row watermark">
      <ul className="col-md-3 footerLink font16 everibiteRobotoMedium">
        <li className="everibiteViga footerHead">Company</li>
        <li>About us</li>
        <li>Team</li>
        <li>Careers</li>
        <li>Everibite Blog</li>
      </ul>
      <ul className="col-md-3 footerLink font16 everibiteRobotoMedium">
        <li className="everibiteViga footerHead">Contact</li>
        <li>Help & Support</li>
        <li>Partner with us</li>
      </ul>
      <ul className="col-md-3 footerLink font16 everibiteRobotoMedium">
        <li className="everibiteViga footerHead">Legal</li>
        <li>Terms & conditions</li>
        <li>Refund & Cancellation</li>
        <li>Privacy Policy</li>
        <li>Offer Terms</li>
      </ul>
      <div className="col-md-3 footerLink">
        <h5 className="everibiteViga footerHead text-white">Signup for special offers & coupons</h5>
        <form className="form-inline">
          <FormControl
            type="email"
            placeholder="Enter Your Email Address"
            className="w-75 py-4 my-3 footPlaceholder"
            />
          <Button
            bsSize="large"
            type="submit"
            className="px-5 mb-4 w-75 sendTreat everibiteViga"
          >
          SEND ME TREATS !
          </Button>
        </form>
 <div className="mt-3 text-center pr-5">
<Icon icon={facebook} size={30} className="mr-3"/>
<Icon icon={pinterest} size={30} className="mr-3"/>
<Icon icon={instagram} size={30} className="mr-3"/>
<Icon icon={twitter} size={30} className="mr-5"/>
</div>
      </div>
    </div>
    <div className="row watermark">
      <div className="col-md-6">
        <img src={footerLogo} alt="footerlogo"/>
      </div>
      <div className="col-md-6">
        <p className="float-right mt-5 text-white">&copy; 2018 Everibite</p>
      </div>
    </div>
  </footer>
</div>
);
}
}


