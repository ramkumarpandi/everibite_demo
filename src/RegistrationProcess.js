import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FormControl} from 'react-bootstrap';
import NavBar from './NavBar';
import './NavBar.css';
import './EveribiteStyle.css';
import OTP from './OTP';
import img1 from './images/confirm.png';
import img3 from './images/mail.png';
import resend from './images/resendKey.png';

export default class RegistrationProcess extends Component{
state={
	showRes:'false'
};
verify(){
	this.setState({showRes:'true'})
}
render(){
return(
<div>
<NavBar/>
<div className="container Registration">
	<div className="text-center watermark">
		<img src={img1} alt="confirmImg"/>
		<p className="everibiteViga font32 wordColor">Hi Username, We appreciate your cherishing</p>
		<p className="everibiteRobotoMedium font24" style={{color:'#2a830c'}}>You have successfully registered with us !</p>
		<p className="everibiteRobotoRegular font16 wordColor"><p className="mb-0">Verification email has been send your email ID </p>
		<p>by clicking the link mentioned in the email</p></p>
	</div>

	<div className="text-center watermark">
		<img src={img3} alt="Mail"/>
		<p className="everibiteViga font24 wordColor">Hi Username, Your email verificationis successful</p>
		<p className="everibiteRobotoRegular font16 wordColor">We have sent an OTP to your Mobile number. Please submit the OTP.</p>
		<p><img src={resend} alt="resendOTP"/><FormControl
            type="text"
			className="d-inline-block resendIp"
          /><Link to="" className="everibiteRobotoMedium font14 ml-3" style={{color:'#2a830c'}}>Re-send OTP</Link></p>
		<button className="btn everibiteViga verifyBtn px-5 text-center py-2" onClick={this.verify.bind(this)}>VERIFY</button>
	</div>
{this.state.showRes === 'false' ? null : <OTP/> }	
	
</div>
</div>

);
}
}
