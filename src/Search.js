import React from 'react';
import {FormGroup,FormControl,Button} from 'react-bootstrap';
import loc from './images/loc.png';
import './Search.css';
import './EveribiteStyle.css';

const Search = () => 
(

<div className="searchBox watermark">
	<section className="container formBorder watermark">
	<form className="px-5 m-5 row">
	<div className="form-group-lg col-md-3 mr-5 px-0 selectBox">
      <img src={loc} alt="locIcon" className="pb-2"/>
  <select className="form-control border-0 d-inline-block p-0 everibiteRobotoBold" id="sel1" style={{width:'225px'}}>
    <option>Bengaluru, Karnataka
    </option>
    <option>Chennai,TamilNadu
    </option>
    <option>Thiruvanthapuram, Kerala
    </option>
    <option>Hyderabad, AndhraPradesh
    </option>
  </select>
</div>

        <div className="bg-white rounded col-md-8 landInput watermark">
        <FormGroup controlId="formBasicText" bsSize="large" className="w-75 d-inline-block mb-0 mt-2 pt-1">          
          <FormControl
            type="search"
            value=""
            placeholder="Search for Recipes, Cusines, Restaurants .."
		className="border-0"/>
</FormGroup>
<Button className="everibiteViga font18  findBites p-3 float-right my-3" bsSize="large">FIND BITES</Button></div>
      </form>
      </section>

</div>

);

export default Search;
