import React from "react"; 
import FeaturedProductCategoryItemWrapper from "../FeaturedProductCategoryItemWrapper/FeaturedProductCategoryItemWrapper";
import ProductCategoryItemWrapper from "../ProductCategoryItemWrapper/ProductCategoryItemWrapper";
import "./FeaturedProductCategory.css";
function FeaturedProductCategory(props) {
  const {name} = props.category || {}
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <h4>Featured products</h4> <span>See all</span>
      </div> 

      <FeaturedProductCategoryItemWrapper categoryName = {name}/>
    </div>
  );
}

export default FeaturedProductCategory;
