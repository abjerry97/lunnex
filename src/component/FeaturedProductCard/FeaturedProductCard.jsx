import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./FeaturedProductCard.css";
import data from "../../static/data";
function FeaturedProductCard(props) {
  const {productId} = props
  const [product, setProduct] = useState(data.products[productId]) 
  const productCategoryColor = {
    Fashion: "bg-wine",
    Gadgets:"bg-offWhite",
    Furniture:"bg-bluegreen"

  } 
  return (  
    <Col  className={props.className}>
          <div className=" shadow  featured-product-card"> 
              <img src="/images/chair.png" alt="imani-bahati" width="100%" height="100%" />
          
          
          </div>
        </Col>
     
  );
}

export default FeaturedProductCard;
 