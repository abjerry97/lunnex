import React, { useState } from "react";
import "./SubscribeBox.css";
import "./SubscribeBox.css";
import SubscribeIcon from "./subscribeIcon.svg"
function SubscribeBox(props) {
  return (
    <div className="subscribe-box d-block d-md-flex gap-4 w-100">
      <div className=" bg-white d-flex justify-content-center align-items-center subscride-email-wrapper py-2 px-4 gap-3 w-100">
        <img src={SubscribeIcon} alt="" srcset="" />
        <input
          type="email"
          name="subscribe"
          id=""
          placeholder="Enter E-mail Address"
          className="w-100"
        /> 
      </div>
      <div className="subscride-btn p-2 px-4 mt-2 mt-md-0 text-center">Submit</div>
    </div>
  );
}

export default SubscribeBox;
