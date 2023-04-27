import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, backgroundColor, phone }) => {
  return (
    <div className="">
      <NavBar />
      <div>{children}</div>
      <Footer phone={phone} />
    </div>
  );
};

export default Layout;
