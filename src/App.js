import Header from "./component/Header"; 
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Copyright from "./component/Copyright/Copyright";
import { useState } from "react";


function App() {
  const [sidebarActive, setsidebarActive] =  useState(false);
  return (
    <>
    <Header setsidebarActive={setsidebarActive} />
     <Home setsidebarActive={setsidebarActive} sidebarActive={sidebarActive} />
     <Footer/>
     <Copyright/>
      
    </>
  );
}

export default App;
