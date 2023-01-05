import React from "react"; 
import ProductCategoryItemWrapper from "../ProductCategoryItemWrapper/ProductCategoryItemWrapper";
import "./ProductCategoryItem.css";
function ProductCategoryItem(props) {
  const {name} = props.category || {}
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <h4>{name}</h4> <span>See all</span>
      </div> 

      <ProductCategoryItemWrapper categoryName = {name}/>
    </div>
  );
}

export default ProductCategoryItem;
