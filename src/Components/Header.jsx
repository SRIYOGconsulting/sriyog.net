import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DarkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Added navigation for search
  useEffect(() => {
  const savedTheme = localStorage.getItem('Theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setDarkIcon(false);
    } else {
      document.body.classList.remove('dark');
      setDarkIcon(true);
    }
  }, []);

  const TriggerTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
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
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-4 pl-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/images/Logo/sriyoglogo.svg"
              alt="Sriyog Logo"
              className="w-[140px] sm:w-[170px] h-auto"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center spcae-x-0 sm:space-x-4">
          {!showSearch &&
          <div className="space-x-6 hidden lg:block">
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
            <button className="bg-teal-900 border border-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
              Notice
            </button>
          </Link>
          </div>
          }
          
          {/* Mobile Notice button*/}
          <div>
            <Link to="/notice">
              <button className="bg-[#ebebeb] sm:hidden border-[1.5px]  border-teal-800 text-black px-4 py-px rounded hover:bg-teal-800">
                Notice
              </button>
            </Link>
          </div>


          {/* Sliding Input */}
          <div className="absolute md:right-52 lg:right-24">
          <div className={`hidden md:flex relative  bg-white ml-2 mr-8 z-20 py-0 border rounded-md  focus:outline-none
                transition-all duration-300 ease-in-out h-[32px]
                ${showSearch ? "sm:w-[250px] lg:w-[550px] opacity-100 px-3 py-1" : "w-0 opacity-0 px-0 py-0 overflow-hidden"}`}>
                  <button onClick={()=>setShowSearch(false)} className="text-black absolute -top-1.5 left-2 font-bold text-3xl bottom-1 top">
                    ‹
                  </button>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Search..."
                  className={` absolute search left-8 right-0 -top-0 -bottom-0 border-none outline-none rounded-r-md  focus:outline-none  focus:ring-none
                    transition-all duration-300 ease-in-out 
                    ${showSearch ? "md:w-[300px] lg:w-[517px] opacity-100 " : "w-0 opacity-0 px-0 py-0 overflow-hidden"}`}
                />
          </div>               
          </div>
          {/* SEARCH ICON */}
          {!showSearch && 
          <img onClick={()=>setShowSearch(true)} src="/icons/search.svg" className="w-[22px] h-[22px] cursor-pointer hidden md:block"/>}
          

          <div className="hidden sm:block">
            <button
              onClick={TriggerTheme}
              className={`text-2xl ml-2 mr-0 lg:mr-0 rounded-full h-8 w-8 ${
                DarkIcon
                  ? "bg-black text-white rotate-45 pl-1"
                  : "bg-white text-black"
              }`}
            >
              {DarkIcon ? "☽" : "☀︎"}
            </button>
          </div>
          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen}/>
        </nav>
      </div>
    </header>
  );
};

export default Header;











