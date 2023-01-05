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
          <div className=" shadow  product-card position-relative">
          <div className={`${productCategoryColor[product?.category] || "bg-gray"}  d-flex justify-content-center align-items-center`}>
              <img src={product?.image} alt="imani-bahati" />
            </div>
            <div className="p-3 footer">
                <div className="product-card-text">
                    <h5 className="m-0"> {product?.name}</h5>
                    <p className="m-0">{product?.newPrice}</p>
                    <p className="m-0">{product?.price}</p>
                </div>
                <div className="product-card-btn">Add to cart</div>
            </div>
          </div>
        </Col>
     
  );
}

export default ProductCard;
 