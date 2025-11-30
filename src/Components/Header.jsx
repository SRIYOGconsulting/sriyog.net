import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

const Header = () => {
  const [DarkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Added navigation for search

  const TriggerTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      setDarkIcon(false);
    }
  };

  // Added Function to handle search
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // navigate to search page
      setShowSearch(false); // hide input after search
      setSearchQuery(""); // clear input
    }
  };

  //  Added Handle Enter key to trigger search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
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
          <Link to="/" className=" hover:text-teal-700">
            Home
          </Link>
          <Link to="/about" className=" hover:text-teal-700">
            About
          </Link>
          <Link to="/services" className=" hover:text-teal-700">
            Services
          </Link>
          <Link to="/feedback" className=" hover:text-teal-700">
            Feedback
          </Link>
          <Link to="/team" className=" hover:text-teal-700">
            Team
          </Link>
          <Link to="/contact" className=" hover:text-teal-700">
            Contact
          </Link>

          <Link to="/career">
            <button className="border border-teal-900 rounded px-4 py-1  hover:bg-teal-50">
              Career
            </button>
          </Link>

          <Link to="/notice">
            <button className="bg-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
              Notice
            </button>
          </Link>

          {/* SEARCH ICON And INPUT */}
          <div className="relative">
            <img
              src="/icons/search.svg"
              alt="Search"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            {showSearch && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search..."
                className="absolute bottom-full mb-2 right-0 w-64 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white z-50"
              />
            )}
          </div>

          <div>
            <button
              onClick={TriggerTheme}
              className={`text-2xl rounded-full h-8 w-8 ${
                DarkIcon
                  ? "bg-black text-white rotate-45 pl-1"
                  : "bg-white text-black"
              }`}
            >
              {DarkIcon ? "☽" : "☀︎"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
