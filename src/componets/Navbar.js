import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "Services", to: "/services" },
    { title: "Packages", to: "/packages" },
    { title: "Plan Your Day", to: "/plan-your-day" },
    { title: "Gallery", to: "/gallery" },
    { title: "Contact", to: "/contact" },
    { title: "About", to: "/about" },
    { title: "Facials & More", to: "/facials-more" },
  ];

  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="py-6 flex justify-between items-center">
        <Link to="/" className="">
          Cascade Spa
        </Link>

        <button className="sm:hidden block" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
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
          } text-lg sm:flex sm:items-center gap-8`}
        >
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="relative block hover:text-main-grey nav-link"
              activeClassName="active-link"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10 bg-white opacity-100">
          <Link to="/" className="absolute top-6 left-5">
            Cascade Spa
          </Link>
          <button className="absolute top-6 right-5" onClick={toggleMenu}>
            <svg
              className="block h-6 w-6"
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

          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="hover:line-through"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
            {/* Your existing social icons code */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
