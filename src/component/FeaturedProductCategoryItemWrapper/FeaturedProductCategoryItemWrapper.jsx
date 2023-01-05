import React, { useState } from "react";
import { Col } from "react-bootstrap";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";
import "./FeaturedProductCategoryItemWrapper.css";
import data from "../../static/data";
function FeaturedProductCategoryItemWrapper() {
  const [isLoading, setisLoading] = useState(false);
  const emptyProduct = new Array(4).fill({});
  return (
    <div className="row row-cols-1 row-cols-md-2 g-lg-5 gy-5 py-3">
      <Col className="row flex-column gy-4">
        {emptyProduct.slice(0, 2).map((product, index) => {
          return <FeaturedProductCard className="horz" productId={product?._id} key={index} />;
        })}
      </Col>
      <Col className="row  gy-4 flex-row">
        {emptyProduct.slice(0, 2).map((product, index) => {
          return <FeaturedProductCard className="vert" productId={product?._id} key={index} />;
        })}
      </Col>
    </div>
  );
}

export default FeaturedProductCategoryItemWrapper;
