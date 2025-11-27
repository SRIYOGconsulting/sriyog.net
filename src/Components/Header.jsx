import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/images/Logo/sriyoglogo.svg"
              alt="Sriyog Logo"
              className="w-[200px] h-auto"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-teal-900 hover:text-teal-700">Home</Link>
          <Link to="/about" className="text-teal-900 hover:text-teal-700">About</Link>
          <Link to="/services" className="text-teal-900 hover:text-teal-700">Services</Link>
          <Link to="/feedback" className="text-teal-900 hover:text-teal-700">Feedback</Link>
          <Link to="/team" className="text-teal-900 hover:text-teal-700">Team</Link>
          <Link to="/contact" className="text-teal-900 hover:text-teal-700">Contact</Link>

          <Link to="/career">
            <button className="border border-teal-900 rounded px-4 py-1 text-teal-900 hover:bg-teal-50">
              Career
            </button>
          </Link>

          <Link to="/notice">
            <button className="bg-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
              Notice
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;