import React, { useState } from "react";
import ProductCategoryItem from "../ProductCategoryItem/ProductCategoryItem";
import "./productCategories.css";
import data from "../../static/data";
function ProductCategories() {
  const [categories, setcategories] = useState(data.productCategories);
  const [categoryItems, setCategoryItems] = useState(data.productCategoryItem);
  return (
    <>
      {categories.map((category,index) => {

        return categoryItems[category.name].length >0  && <ProductCategoryItem key={index} category= {category}/>;
      })}

      <div className="load-more d-flex justify-content-center align-items-center my-4">
        <div className="">
      Load more categories</div>
      </div>
    </>
  );
}

export default ProductCategories;
