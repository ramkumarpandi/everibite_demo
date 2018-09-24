import React,{ Component } from 'react';
import {Tab,Tabs} from 'react-bootstrap';
//import './Current.css';
import Current from './Current';
import Past from './Past';
//import './ViewTab.css';
export default class viewTab extends Component
{


	render()


		{		
			return(
				<div className="Viewtab watermark">
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example"> 
					<Tab eventKey={1} title="Current Orders">
					<Current/>
					</Tab> 
					<Tab eventKey={2} title="Past Orders">

					<Past/>

					</Tab>
					</Tabs>

				</div>

				);
	

		}


}
