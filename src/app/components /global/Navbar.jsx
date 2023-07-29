// Navbar.js
import React from "react";
import Drawer from "./Drawer";
import NavbarDrawer from "./Drawer";

const Navbar = () => {
  return (
    <nav className="bg-priamry text-secondary p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" text-xl font-bold">Solve Quizzes</div>
          <div className="navbar__links">
            <ul className=" flex space-x-4">
              <li>
                <a className="" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <NavbarDrawer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
