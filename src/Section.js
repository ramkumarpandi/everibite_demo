

import React, { Component } from 'react';
import './Section.css';
export default class Section extends Component{
render(){
return(
<div>
  <section className="sec1">
    <form className="p-5 col-md-offset-2">
      <div className="form-row py-3">
        <div className="form-group col-md-6">
          <input type="text" className="form-control py-4" id="name" placeholder="Name"/>
        </div>
        <div className="form-group col-md-6">
          <input type="email" className="form-control py-4" id="inputEmail4" placeholder="Email"/>
        </div>
      </div>
      <div className="form-group py-3">
        <input type="text" className="form-control py-5" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <div className="form-row py-3">
        <div className="form-group col-md-6">
          <input type="text" className="form-control py-4" id="inputCity" placeholder="City"/>
        </div>
        <div className="form-group col-md-4">
          <input type="text" className="form-control py-4" id="inputstate" placeholder="State"/>
        </div>
        <div className="form-group col-md-2">
          <input type="text" className="form-control py-4" id="inputZip" placeholder="ZipCode"/>
        </div>
      </div>
      <button type="submit" className="btn btn-success">Leave Your Feedback..</button>
    </form>
  </section>
</div>
);
}
}


