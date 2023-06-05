import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, backgroundColor, phone }) => {
  return (
    <div className="relative w-full">
      <NavBar className="absolute top-0 w-full z-30" />
      <div className="-mt-20">{children}</div>
      <Footer phone={phone} />
    </div>
  );
};

export default Layout;
