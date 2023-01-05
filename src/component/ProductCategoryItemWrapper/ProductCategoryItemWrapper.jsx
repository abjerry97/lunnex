import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCategoryItemWrapper.css";
import data from "../../static/data";
function ProductCategoryItemWrapper(props) {
  const [isLoading, setisLoading] = useState(false);
  const { categoryName } = props || [];
  const [productCategoryItem, setProductCategoryItem] = useState(
    data.productCategoryItem
  );
  const emptyProduct = new Array(4).fill({}); 
  return (
    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 g-lg-5 gy-5 py-3">
      {!isLoading
        ? productCategoryItem[categoryName].map((product, index) => {
            return <ProductCard productId={product._id} key={index} />;
          })
        : emptyProduct.map((product, index) => {
            return <ProductCard productId={product._id} key={index} />;
          })}
    </div>
  );
}

export default ProductCategoryItemWrapper;
