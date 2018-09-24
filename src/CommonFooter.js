import React, { Component } from 'react';
import './Footer.css';
import footerLogo from './images/logo-footer.png';
import Icon from 'react-icons-kit';
import {twitter, facebook, instagram, pinterest} from 'react-icons-kit/fa/';

export default class CommonFooter extends Component{
render(){
return(
<div className="container-fluid everibiteRobotoLight watermark">
  <div className="row">
    <div className="col-md-9">
      <img src={footerLogo} alt="footerlogo"/>
    </div>
 <div className="col-md-2 pt-5 float-right" style={{color:'#999999'}}>
<Icon icon={facebook} className="mr-3" size={19}/>
<Icon icon={pinterest} className="mr-3" size={19}/>
<Icon icon={instagram} className="mr-3" size={19}/>
<Icon icon={twitter} className="mr-3" size={19}/>
</div>
    <div className="col-d-1">
      <p className="float-right mt-5 footopacity">&copy; 2018 Everibite</p>
    </div>
  </div>
</div>
);
}
}

