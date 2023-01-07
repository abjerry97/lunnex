import React from "react";
import SearchBox from "../SearchBox";

function Header(props) {
  const  {setsidebarActive} = props
  return (
    <div className="container-fluid row align-items-center justify-content-between m-0 py-2 sticky-top bg-white">
      <div className="col-4 col-md-2 mb-4 mb-md-0  p-0">
        <img
          src="/images/LIUYTREDFGHJN1.png"
          alt=""
          srcSet=""
          width="70%"
          // height="100%"
        />
      </div>

      <div className="col-12 col-md-7 order-3 order-md-0 p-0">
        <SearchBox />
      </div>

      <div className="col-3 mb-4 mb-md-0">
        <ul className=" list-unstyled d-flex justify-content-end gap-4 gap-md-5 align-items-center m-0">
          <li className=" d-none d-md-block ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z"
                fill="#26264C"
              />
            </svg>
          </li>

          <li>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
                fill="#26264C"
              />
            </svg>
          </li>

        <li className="hero-img mx-2">
          <img src="/images/hero-img.png" alt="" />
          
          </li>    
          <li className="d-block d-md-none"  onClick={ ()=>{setsidebarActive(true)} }>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black"/>
</svg>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
