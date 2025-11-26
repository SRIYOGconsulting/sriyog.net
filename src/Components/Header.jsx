import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/Logo/sriyoglogo.svg"
            alt="Sriyog Logo"
            className="w-[200px] h-auto"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          <a href="/" className="text-teal-900 hover:text-teal-700">Home</a>
          <a href="/about" className="text-teal-900 hover:text-teal-700">About</a>
          <a href="/services" className="text-teal-900 hover:text-teal-700">Services</a>
          <a href="/feedback" className="text-teal-900 hover:text-teal-700">Feedback</a>
          <a href="/team" className="text-teal-900 hover:text-teal-700">Team</a>
          <a href="/contact" className="text-teal-900 hover:text-teal-700">Contact</a>

          <button className="border border-teal-900 rounded px-4 py-1 text-teal-900 hover:bg-teal-50">
            Career
          </button>

          <button className="bg-teal-900 text-white px-4 py-1 rounded">
            Notice
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;










      

