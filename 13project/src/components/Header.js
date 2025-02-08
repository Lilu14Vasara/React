import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-4xl font-bold"
          style={{ color: "#F4D03F", textShadow: "2px 2px 4px #154360" }}
        >
          Padharo Gujarat
        </h1>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:underline text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/places" className="hover:underline text-lg">
                Places
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
