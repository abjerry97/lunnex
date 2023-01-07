import React from "react"; 
import ProductCategoryItemWrapper from "../ProductCategoryItemWrapper/ProductCategoryItemWrapper";
import "./ProductCategoryItem.css";
function ProductCategoryItem(props) {
  const {name} = props.category || {}
  return (
    <div className="mt-3 mt-md-5">
      <div className="d-flex justify-content-between product-category-item-header">
        <h4><a href=""> {name}</a></h4> <span><a href="">See all </a></span>
      </div> 
    <ProductCategoryItemWrapper categoryName = {name}/> 
    </div>
  );
}

export default ProductCategoryItem;
