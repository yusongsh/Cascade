import React from "react";
import NavBar from "./Navbar";

const Layout = ({ children, backgroundColor }) => {
  return (
    <div className="px-5 md:px-12 lg:px-20">
      <NavBar />
      <div className="pt-12 md:py-20 lg:pt-32 pb-14 md:pb-24 lg:pb-40">
        {children}
      </div>
    </div>
  );
};

export default Layout;
