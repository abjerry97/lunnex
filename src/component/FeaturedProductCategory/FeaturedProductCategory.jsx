import React from "react"; 
import FeaturedProductCategoryItemWrapper from "../FeaturedProductCategoryItemWrapper/FeaturedProductCategoryItemWrapper";
import ProductCategoryItemWrapper from "../ProductCategoryItemWrapper/ProductCategoryItemWrapper";
import "./FeaturedProductCategory.css";
function FeaturedProductCategory(props) {
  const {name} = props.category || {}
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between product-category-item-header">
        <h4> <a href=""> Featured products</a></h4> <span><a href="">See all</a></span>
      </div> 

      <FeaturedProductCategoryItemWrapper categoryName = {name}/>
    </div>
  );
}

export default FeaturedProductCategory;
