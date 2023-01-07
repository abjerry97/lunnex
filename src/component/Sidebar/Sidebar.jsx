import React from "react"; 
import "./Sidebar.css"
function Sidebar() {
  return ( 
    <div className="sticky-top sticky-top-gap">
        <strong className="ms-3 mt-4 ">Explore</strong>
        <ul className=" list-unstyled m-0 ms-3 p-0 mt-3 sidebar-list">
          <li className=" mb-3"> <a href="#"> Fashion </a></li>
          <li className=" mb-3"><a href="#">Gadgets </a></li>
          <li className=" mb-3"><a href="#">Furniture </a></li>
          <li className=" mb-3"><a href="#">Health </a></li>
          <li className=" mb-3"><a href="#">Electronics </a></li>
          <li className=" mb-3"><a href="#">Sporting gear </a></li>
          <li className=" mb-3"><a href="#">Other </a></li>
        </ul>
      
        </div>
  );
}

export default Sidebar;
