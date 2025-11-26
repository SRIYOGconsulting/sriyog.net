import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-16 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between">
        
        {/* Left Section */}
        <div className="w-full lg:w-[45%] mb-10 lg:mb-0">
          
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              <img
                src="/assets/images/projects/cvdslogo.png"
                alt="CVDS Nepal Logo"
                className="h-10 md:h-14 rounded-lg cursor-pointer"
              />
            </Link>
          </div>

          {/* Description */}
          <p className="font-semibold mb-3 text-[16px]">Welcome to CVDS Nepal</p>

          <p className="text-[15px] leading-relaxed text-gray-700 mb-3 text-justify">
            We bring smiles and make life meaningful through our compassionate
            services. The CVDS family warmly welcomes you with love, harmony,
            and peace—values that drive our mission to uplift the lives of
            children with disabilities and conflict victims across Nepal.
          </p>

          <p className="text-[15px] leading-relaxed text-gray-700 text-justify">
            Over the years, we have supported people affected by political,
            social, and cultural violence while providing shelter, care, and
            essential facilities to children in need.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10">

          {/* Browse More */}
          <div>
            <h3 className="font-bold mb-4 text-[16px] tracking-wide">Browse More</h3>
            <ul className="space-y-[12px] text-[15px]">
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/notice">Notice</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-[16px] tracking-wide">Resources</h3>
            <ul className="space-y-[12px] text-[15px]">
              <li><Link to="/appeal">Appeal</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/messages">Message</Link></li>
              <li><Link to="/payment">Payment</Link></li>
              <li><Link to="/qr">QR</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-[16px] tracking-wide">Support</h3>
            <ul className="space-y-[12px] text-[15px]">
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/blog">Blog</Link></li>

              <li>
                <a
                  href="https://trello.com"    
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trello Board
                </a>
              </li>

              <li><Link to="/impact">Social Impact</Link></li>
              <li><Link to="/timeline">Timeline</Link></li>
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h3 className="font-bold mb-4 text-[16px] tracking-wide">Organisation</h3>
            <ul className="space-y-[12px] text-[15px]">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} CVDS Nepal — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;




