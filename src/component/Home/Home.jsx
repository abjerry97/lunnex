import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Intro from "../Intro";
import ProductCategories from "../ProductCategories/ProductCategories";
import FeaturedProductCategory from "../FeaturedProductCategory/FeaturedProductCategory";
import PartneredBrands from "../PartneredBrands/PartneredBrands";

function Home(props) {
  const { sidebarActive ,setsidebarActive } = props; 
  return (
    <div className="container-fluid row  m-0 py-2 mt-2 mt-md-4 ">
      <div
        className={`col-2 p-0 page-sidebar   d-md-block   ${
          sidebarActive ? "  sidebar-active  " : "d-none"
        }`}
      >
        <Sidebar setsidebarActive= {setsidebarActive} />
      </div>

      <div className="col-12 col-md-10 p-0 ">
        <Intro />
        <ProductCategories />
        <FeaturedProductCategory />
        <PartneredBrands />
      </div>
    </div>
  );
}

export default Home;
