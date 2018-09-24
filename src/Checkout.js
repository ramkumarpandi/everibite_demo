import React, { Component } from "react";
import NavBar1 from "./NavBar1";
import { Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyAccount.css";
import "./Footer.css";
import "./NavBar.css";
import "./Checkout.css";
import avatar from "./images/avatar.jpeg";
import visa from "./images/visa.png";
import CommonFooter from "./CommonFooter";
import secure from "./images/secure.png";

export default class Checkout extends Component {
  state = {
    address: [
      {
        id: 1,
        logo: "1",
        place: "Home",
        addr: "45A,EastStreet",
        city: "Ramanathapuram",
        time: 40
      },
      {
        id: 2,
        logo: "2",
        place: "Work",
        addr: "25A,West Street",
        city: "Sungam",
        time: 50
      },
      {
        id: 3,
        logo: "3",
        place: "Others",
        addr: "5A,North Street",
        city: "Singanallur",
        time: 30
      },
    ]
  };
  render() {
    return (
      <div className="checkout watermark">
        <NavBar1 />
        <div className="container">
          <p className="mt-3">Home/Coimbatore/Checkout</p>
          <div className="row mt-5">
            <div className="col-md-8 shadow p-3 mb-5 bg-white rounded watermark">
              <div className="accountInfo p-4">
                <Link to="/LandingPage">
                  <Button className="continueOrder px-4 py-3 mr-3 everibiteViga float-right">
                    Continue Ordering
                  </Button>
                </Link>
                <p className="everibiteViga font18 AccInfo">
                  Account Information
                </p>
                <div className="media">
                  <img
                    className="mr-3 rounded-circle accountLogo"
                    src={avatar}
                    alt="avatar"
                  />
                  <div className="media-body">
                    <p className="mt-1 mb-0 everibiteRobotoRegular font16 custName">
                      Marry John
                    </p>
                    <Link to="/ProfileUpdate" className="everibiteRobotoMedium font12 editProfile">Edit Profile</Link>
                  </div>
                </div>
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
              <hr className="shadow bg-white" />
              <div className="p-4">
                <p className="everibiteViga font18 deliveryInfo">
                  Delivery Information
                </p>
                <div className="row">
                  {this.state.address.map(addLoc => (
                    <div className="col-md-4 m-3 py-3 addr" key={addLoc.id}>
                      <p className="float-right">{addLoc.logo}</p>
                      <p className="everibiteRobotoMedium font14">
                        {addLoc.place}
                      </p>
                      <p className="ml-3 mb-1 everibiteRobotoRegular font14">
                        {addLoc.addr}
                      </p>
                      <p className="ml-3 mb-1 everibiteRobotoRegular font14">
                        {addLoc.city}
                      </p>
                      <p className="everibiteRobotoMedium font14 float-right mb-0">
                        <span className="glyphicon glyphicon-time delTime">
                          {addLoc.time}
                          mins
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <Link to="/NewAddress"><Button className="btn-lg mr-3 float-right addNew everibiteViga font14">
                  Add New               
                </Button>
                </Link>
              </div>
              <hr className="shadow bg-white mt-5" />
              <div className="clearfix">
                <img src={secure} alt="secureImg" className="float-right" />
              </div>
              <p className="everibiteViga font18 paymentOpt">Payment Options</p>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Debit & Credit Cards">
                  <div className="clearfix">
                    <img src={visa} alt="cardsImg" className="float-right" />
                  </div>
                  <form className="container cardStyle">
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label htmlFor="company">Card Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardnum"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-2 pr-0">
                        <label htmlFor="name" className="d-block">
                          Valid thru
                        </label>
                        <input
                          type="text"
                          className="form-control d-inline-block"
                          id="name"
                          placeholder="MM"
                          style={{ width: "45px" }}
                        />
                        <input
                          type="text"
                          className="form-control d-inline-block"
                          id="profession"
                          placeholder="YY"
                          style={{ width: "45px" }}
                        />
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="profession">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="profession"
                          style={{ width: "70px" }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label htmlFor="company">Name on the card</label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                        />
                      </div>
                    </div>
                  </form>
                </Tab>
                <Tab eventKey={2} title="Net Banking">
                  Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Wallets">
                  Tab 3 content
                </Tab>
                <Tab eventKey={4} title="UPI">
                  Tab 4 content
                </Tab>
                <Tab eventKey={5} title="Cash On Delivery">
                  Tab 5 content
                </Tab>
                <Tab eventKey={6} title="Pay Later">
                  Tab 6 content
                </Tab>
              </Tabs>
              <Link to="/OrderCopy">
                <Button className="mr-3 btn-lg float-right mt-3 everibiteViga font18 px-5 proceedPay">
                  PROCEED TO PAY
                </Button>
              </Link>
            </div>
            <div className="col-md-4">
              <div className="shadow mb-5 bg-white rounded watermark">
                <div className="orderSummaryDiv">
                  <h3 className="everibiteViga ml-2 font18 text-white p-3">
                    Order Summary
                  </h3>
                </div>
                <div className="mt-4 d-inline-block ml-3">
                  <p className="everibiteViga font16 itemName">
                    Hyderabadi Chicken Biryani With Raita
                  </p>
                  <p className="everibiteRobotoRegular font13 itemName">
                    South Indian, Biryani
                  </p>
                  <p className="everibiteRobotoBold wilson">
                    Biryani Paradise, Wilson Garden
                  </p>
                </div>
                <div className="float-right mt-4">
                  <p className="font18 everibiteRobotoMedium mb-0 mr-3 priceStyle">
                    &#x20B9; 220
                  </p>
                  <div className="float-right mr-3">
                    <div style={{ clear: "both" }}>
                      <div
                        className="d-inline-block"
                        style={{ padding: "2px", border: "1px solid #e57575" }}
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
                <div className="px-3 placeHold">
                  <input
                    type="text"
                    className="form-control mb-0 p-4"
                    placeholder="Any special instructions? write us here to know"
                  />
                </div>
                <hr className="shadow bg-white mx-3" />
                <div className="mt-4 d-inline-block ml-3">
                  <p className="everibiteViga font16 itemName">
                    Hyderabadi Chicken Biryani With Raita
                  </p>
                  <p className="everibiteRobotoRegular font13 itemName">
                    South Indian, Biryani
                  </p>
                  <p className="everibiteRobotoBold wilson">
                    Biryani Paradise, Wilson Garden
                  </p>
                </div>
                <div className="float-right mt-4">
                  <p className="font18 everibiteRobotoMedium mb-0 mr-3 priceStyle">
                    &#x20B9; 220
                  </p>
                  <div className="float-right mr-3">
                    <div style={{ clear: "both" }}>
                      <div
                        className="d-inline-block"
                        style={{ padding: "2px", border: "1px solid #e57575" }}
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
                
                <div className="px-3 placeHold">
                  <input
                    type="text"
                    className="form-control mb-0 p-4"
                    placeholder="Any special instructions? write us here to know"
                  />
                </div>
                <hr className="shadow bg-white mx-3" />
                <div className="itemAmt">
                <p className="ml-3 mb-0">
                  <span>Item Total</span>
                  <span className="float-right mr-3">&#x20B9; 440.00</span>
                </p>
                <p className="ml-3 mb-0">
                  <span>Restaurant Packing Charges</span>
                  <span className="float-right mr-3">&#x20B9; 7.50</span>
                </p>
                <p className="ml-3 mb-0">
                  <span>GST</span>
                  <span className="float-right mr-3">&#x20B9; 20.93</span>
                </p>
                <p className="ml-3 mb-0">
                  <span>Delivery Charges</span>
                  <span className="float-right mr-3">&#x20B9; 40.00</span>
                </p>
                </div>
                <hr className="bg-success everibite-hr" />
                <div className="p-3">
                  <p className="d-inline-block everibiteRobotoBold font16 toPay">TO PAY</p>
                  <p className="float-right mr-3 toPayRate everibiteRobotoBold font16 toPay">
                    <span className="font14">&#x20B9;</span> 508.83
                  </p>
                </div>
                <div className="clearfix px-3">
                  <form>
                    <label className="everibiteRobotoBold font11 couponcode">Do ypu have any coupon codes?</label>
                    <input
                      type="text"
                      className="form-control float-left couponInput"
                    />
                    <Button className="px-4 py-2 apply everibiteRobotoBold font13 float-right btn-lg">
                      Apply
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter/>
      </div>
    );
  }
}
