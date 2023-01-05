import React, { useState } from "react";
import SubscribeBox from "../SubscribeBox/SubscribeBox";
import "./Footer.css";
function Footer(props) {
  return (
    <div className=" footer-sec container-fluid row justify-content-center m-0">
    <div className="pt-4 col-9 col-lg-7">
      <p>
        Want to know more about our dicounts and updates? <br/> Subscribe to our
        e-mail newsletters!
      </p>
      <SubscribeBox/> 
    </div>
      <div className="pt-4">
    <div className="row"> 
      <div className="col-12 col-md-8 mb-3">
       <h3>SHORT LINKS</h3>
       <div className="d-block d-md-flex ">
       <ul  className="col-12 col-md-6">
         <li><a href="#">How to shop on lunnex?</a></li>
         <li><a href="#">Corporate and bulk purchases</a></li>
         <li><a href="#">How to return a product on lunnex?</a></li>
         <li><a href="#">Delivery options and timeline</a></li>
         <li><a href="#">FAQ</a></li> 
       </ul>
       <ul  className="col-12 col-md-6">
         <li><a href="#">How do I get my Vouchers?</a></li>
         <li><a href="#">How to withdraw from Lunnex wallet?</a></li>
         <li><a href="#">How to track my purchase?</a></li>
         <li><a href="#">Lunnex Refferal Program</a></li> 
       </ul>
       </div>
     </div>
     <div className="col-12 col-md-4">
       <h3>ABOUT LUNNEX</h3>
       <div className=" d-block d-md-flex justify-content-between">
       <ul>
         <li><a href="#">About us</a></li>
         <li><a href="#">Contact us</a></li>
         <li><a href="#">Text center</a></li>
         <li><a href="#">Privacy and policy</a></li>
         <li><a href="#">Terms and conditions</a></li> 
       </ul> 
       </div>
     </div>
      </div></div> 
    </div>
  );
}

export default Footer;
