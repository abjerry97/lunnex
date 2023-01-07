import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./ProductCard.css";
import data from "../../static/data";
function ProductCard(props) {
  const {productId} = props
  const [product, setProduct] = useState(data.products[productId]) 
  const productCategoryColor = {
    Fashion: "bg-wine",
    Gadgets:"bg-offWhite",
    Furniture:"bg-bluegreen"

  } 
  return (  
    <Col>
          <div className="    product-card position-relative p-0">
          <div className={` ${productCategoryColor[product?.category] || "bg-gray"}  d-flex justify-content-center align-items-center`}>
              <img src={product?.image} alt="imani-bahati" />
            </div>
            <div className="pt-3 px-2 px-md-3 footer row m-0">
                <div className="col-7 product-card-text p-0">
                    <h5 className="m-0"> {product?.name}</h5>
                    <p className="m-0">{product?.newPrice}</p>
                    <p className="m-0">{product?.price}</p>
                </div>
                <div className=" col-5 p-0">
                  <div className="product-card-btn">Add to cart</div>  </div>
            </div>
          </div>
        </Col>
     
  );
}

export default ProductCard;
 