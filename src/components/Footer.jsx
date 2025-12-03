import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ⭐ Reusable hover class for all footer items
  const hoverBox =
    "transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-green-600/20 hover:to-green-400/20 hover:scale-[1.03] hover:shadow-md";

  return (
    <footer className="relative  pt-16 pb-10 border-t footer z-10">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[45%]">
          <div className="mb-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/Logo/sriyoglogo.svg"
                alt="Sriyog Logo"
                className="w-[200px] h-auto"
              />
            </Link>
          </div>

          <p className="text-[15px] leading-relaxed  mb-4">
            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in
            Kamalpokhari, Kathmandu, Nepal, is a leading provider of digital
            solutions dedicated to driving digital transformation in the
            healthcare, employment, and tourism sectors.
          </p>

          <p className="text-[15px] leading-relaxed ">
            Our mission is to empower organizations in these vital industries
            with innovative, scalable, technology-driven services that enhance
            operational efficiency and support long-term growth.
          </p>
        </div>

        {/* RIGHT COLUMNS */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 pt-6">

          {/* Browse More */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Browse More</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/vmgo" className="hover:text-green-700">Mission & Vision</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/history" className="hover:text-green-700">History</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/whyus" className="hover:text-green-700">Why Us</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/certificates" className="hover:text-green-700">Certificates</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/timeline" className="hover:text-green-700">Timeline</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Resources</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/gallery" className="hover:text-green-700">Gallery</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/career" className="hover:text-green-700">Career</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/qr" className="hover:text-green-700">QR Code</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/glossary" className="hover:text-green-700">Glossary</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/message" className="hover:text-green-700">Message</Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Links</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/calendar" className="hover:text-green-700">Calendar</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/faq" className="hover:text-green-700">FAQ</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/payment" className="hover:text-green-700">Payment</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/internship" className="hover:text-green-700">Internship</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/downloads" className="hover:text-green-700">Download</Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Explore</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/videos" className="hover:text-green-700">Videos</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <a href="https://trello.com" target="_blank" className="hover:text-green-700">Trello Board</a>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/location" className="hover:text-green-700">Location</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/refund-policy" className="hover:text-green-700">Refund Policy</Link>
              </li>
              <li className={`py-1 cursor-pointer ${hoverBox}`}>
                <Link to="/cookie-policy" className="hover:text-green-700">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SOCIAL + CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-8 mt-10">

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 justify-center lg:justify-start">
          {["x", "linkedin", "youtube", "trello", "signal", "discord", "viber"].map((icon) => (
            <a key={icon} href="#" className="hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/${icon}.svg`} alt={icon} className="h-7 w-7 cursor-pointer" />
            </a>
          ))}
        </div>

        {/* CONTACT BOXES */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">

          {/* EMAIL + PHONE */}
          <div className="flex flex-col sm:flex-row items-stretch border-2 rounded-lg overflow-hidden w-full sm:w-auto">
            <a href="mailto:info@sriyog.com" className={`flex items-center gap-2 px-6 py-3 ${hoverBox}`}>
              <img src="/icons/email.svg" alt="email" className="h-6 w-6" />
              <span className="text-sm">info@sriyog.com</span>
            </a>

            <div className="border-t-2 sm:border-l-2  w-full sm:w-auto"></div>

            <a href="tel:+977014548068" className={`flex items-center gap-2 px-6 py-3 ${hoverBox}`}>
              <img src="/icons/phone.svg" alt="phone" className="h-6 w-6" />
              <span className="text-sm">+977-01-4548068</span>
            </a>
          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/9779852024365"
            target="_blank"
            className={`flex items-center gap-2 border-2 rounded-lg px-6 py-3 w-full sm:w-auto ${hoverBox}`}
          >
            <img src="/icons/whatsapp.svg" alt="whatsapp" className="h-6 w-6" />
            <span className="text-sm">+977 98520-24-365</span>
          </a>
        </div>
      </div>

      {/* HORIZONTAL LINE */}
      <div className="w-full border-t  mt-14 mb-6"></div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row justify-between text-[13px]  gap-3 text-center md:text-left font-semibold">
        <p>
          Copyright {currentYear} SRIYOG Consulting | Built With: BroadPress
        </p>

        <div className="flex gap-4 justify-center md:justify-end font-semibold ">
          <Link to="/privacy-policy" className={`hover:underline cursor-pointer ${hoverBox}`}>Privacy Policy</Link>
          <span>|</span>
          <Link to="/disclaimer" className={`hover:underline cursor-pointer ${hoverBox}`}>Disclaimer</Link>
          <span>|</span>
          <Link to="/terms-of-service" className={`hover:underline cursor-pointer ${hoverBox}`}>Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;