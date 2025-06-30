import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="fixed top-0 w-full bg-base-100 shadow-2xl z-50">
      <div className="max-w-[85%] mx-auto flex justify-between items-center h-16">
        <div className="text-xl font-bold">MBH</div>
        <div className="hidden md:flex space-x-6">
          {[
            "home",
            "about",
            "skills",
            "education",
            "projects",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-primary"
              className="cursor-pointer hover:text-primary"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <button onClick={toggleTheme} className="btn btn-ghost">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
