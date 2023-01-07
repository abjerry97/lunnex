import React from "react";  import "./PartneredBrands.css";
function PartneredBrands(props) {
  const {name} = props.category || {}
  return (
    <div className="mt-3 mt-md-5">
      <div className="d-flex justify-content-center partnered-brand-header">
        <h4>Partnered Brands</h4>  
      </div> 
    <div className="row">
    <div className="col-3">
        <img
          src="/images/LIUYTREDFGHJN1.png"
          alt=""
          srcSet=""
          width="70%"
          // height="100%"
        />
      </div>
    <div className="col-3">
        <img
          src="/images/LIUYTREDFGHJN1.png"
          alt=""
          srcSet=""
          width="70%"
          // height="100%"
        />
      </div>
    <div className="col-3">
        <img
          src="/images/LIUYTREDFGHJN1.png"
          alt=""
          srcSet=""
          width="70%"
          // height="100%"
        />
      </div>
    <div className="col-3">
        <img
          src="/images/LIUYTREDFGHJN1.png"
          alt=""
          srcSet=""
          width="70%"
          // height="100%"
        />
      </div>
    </div>
    </div>
  );
}

export default PartneredBrands;
