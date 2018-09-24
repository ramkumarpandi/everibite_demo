import React,{ Component } from 'react';
import './EveribiteStyle.css';
export default class OrderInfo extends Component
{
	render()
		{
			return(
			<div className="watermark">
			<h3 className="everibiteViga font18 orderInfo">Order Information</h3>
			<div className="clearfix">				
			<div className="float-left">	
			<p className="menuName mb-1">Hydrebadi Chicken Biryani With Raita</p>
			<p className="menuType mb-1">South Indian,Biryani</p>
			<p className="restName mb-1">Biryani Paradise,Wilson Garden</p>			
			</div>
			<div className="float-right">
			<span className="font18 everibiteRobotoMedium priceStyle pb-3">&#8377;200</span>
                    <div style={{ clear: "both",textAlign:'right' }}>
                      <div className="d-inline-block" style={{ padding: "2px", border: "1px solid #e57575", borderRadius:'3px'}}>
                        <div style={{width: "7px",height: "7px",borderRadius: "50%",background:'#e57575'}}/>
                      </div>
                    </div>
					
            </div>
			</div>
			<hr/>
			<div className="clearfix">	
			
			<div className="float-left">	
			<p className="menuName mb-1">Hydrebadi Chicken Biryani With Raita</p>
			<p className="menuType mb-1">South Indian,Biryani</p>
			<p className="restName mb-1">Biryani Paradise,Wilson Garden</p>			
			</div>
			<div className="float-right">
			<span className="font18 everibiteRobotoMedium priceStyle pb-3">&#8377;200</span>
                    <div style={{ clear: "both",textAlign:'right' }}>
                      <div
                        className="d-inline-block"
                        style={{ padding: "2px", border: "1px solid #e57575" , borderRadius:'3px'}}
                      >
                        <div
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background:'#e57575'
                          }}
                        />
                      </div>
                    </div>
					
            </div>
			</div>
			<hr/>
		
			<div className="itemAmt">
			<p className="mb-0">Item Total<span className="float-right">&#8377;440.00</span></p>
			<p className="mb-0">Restaurant Packaging Charges<span className="float-right">&#8377;7.80</span></p>
			<p className="mb-0">GST<span className="float-right">&#8377;20.93</span></p>
			<p className="mb-0">Delivery Charges<span className="float-right">&#8377;40.00</span></p>
			<hr style={{borderTop:'2px solid green'}}/>
			</div>
			<div>
			<p className="text-uppercase everibiteRobotoBold font16 toPay">Amount Paid<span className="float-right toPayRate everibiteRobotoBold font16 toPay"><span className="font14 mr-1">&#8377;</span>580.00</span></p>		
			</div>			
			</div>

				);

		}






}

