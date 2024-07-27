import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);

  const handleNavStatus = (path) => {
    setActiveNav(path);
  };

  return (
    <nav className="bg-transparent">
      <ul className="mx-auto flex cursor-pointer justify-center space-x-2 py-5 font-sans text-light">
        <li
          onClick={() => handleNavStatus("/")}
          className={activeNav === "/" ? "text-white" : "text-light"}
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          onClick={() => handleNavStatus("/about")}
          className={activeNav === "/about" ? "text-white" : "text-light"}
        >
          <Link to="/about">ABOUT</Link>
        </li>
        <li
          onClick={() => handleNavStatus("/contact")}
          className={activeNav === "/contact" ? "text-white" : "text-light"}
        >
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
