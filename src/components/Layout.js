import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, backgroundColor }) => {
  return (
    <div className="">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
