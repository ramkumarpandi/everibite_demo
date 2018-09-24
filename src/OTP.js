import React from 'react';
import img2 from './images/registration.png';
import { Link } from 'react-router-dom';

const OTP = () => (
<div>
<div className="container">

	<div className="text-center shadow p-3 mb-5 bg-white rounded w-50 mx-auto mt-5">
		<img src={img2} alt="registrationImg"/>
		<h1>Hi Username, your verification is</h1>
		<h1 className="text-success">Successful</h1>
		<h4>Login and start ordering your favourite food and Enjoy your food abd provide yoyr valuable feedback to better to know your taste!...</h4>
		<Link to=""><button className="text-white btn btn-success">LOGIN NOW</button></Link>
	</div>
</div>
</div>

);
export default OTP;
