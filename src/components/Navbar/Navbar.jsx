import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <ul className="text-light mx-auto flex cursor-pointer justify-center space-x-2 py-5 font-sans ">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        {/* not in use now */}
        {/* <li>
          <Link to="/projects">PROJECTS</Link>
        </li> */}
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
