import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../images/Cascade-logo.png";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "Services", to: "/services" },
    { title: "Packages", to: "/packages" },
    { title: "Plan Your Day", to: "/planyourday" },
    { title: "Gallery", to: "/gallery" },
    { title: "Contact", to: "/contact" },
    { title: "About", to: "/about" },
    { title: "Facials & More", to: "/facial" },
  ];

  return (
    <nav
      className={`px-4 md:px-16 lg:px-32 sticky top-0 bg-main-bg-service/70
     z-10`}
    >
      <div className="py-4 max-w-[1440px] mx-auto flex justify-between items-center">
        <Link to="/" className="">
          <img src={logo} alt="cascade logo" className="w-28 h-auto" />
        </Link>

        <button className="xl:hidden block" onClick={toggleMenu}>
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
            {!isOpen ? (
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } text-base font-light font-title uppercase xl:flex xl:items-center gap-8`}
        >
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="relative block transition-colors duration-500 ease-in-out hover:text-main-gold"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10 bg-white font-black opacity-100">
          <button
            className="absolute top-6 right-4 md:right-16"
            onClick={toggleMenu}
          >
            <svg
              className="block h-8 w-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-4 text-2xl font-light font-title uppercase ">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="text-black hover:text-main-gold"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
