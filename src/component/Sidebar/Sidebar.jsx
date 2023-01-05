import React from "react"; 

function Sidebar() {
  return ( 
    <div className="sticky-top sticky-top-gap">
        <strong className="ms-3 mt-4 ">Explore</strong>
        <ul className=" list-unstyled m-0 ms-3 p-0 mt-3">
          <li className=" mb-3">Fashion</li>
          <li className=" mb-3">Gadgets</li>
          <li className=" mb-3">Furniture</li>
          <li className=" mb-3">Health</li>
          <li className=" mb-3">Electronics</li>
          <li className=" mb-3">Sporting gear</li>
          <li className=" mb-3">Other</li>
        </ul>
      
        </div>
  );
}

export default Sidebar;
