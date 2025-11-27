import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); //  Dynamic year
  return (
    <footer className="relative bg-white text-gray-900 pt-16 pb-10 border-t border-gray-200 -z-10">

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

          <p className="text-[15px] leading-relaxed text-gray-700 mb-4">
            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in
            Kamalpokhari, Kathmandu, Nepal, is a leading provider of digital
            solutions dedicated to driving digital transformation in the
            healthcare, employment, and tourism sectors.
          </p>

          <p className="text-[15px] leading-relaxed text-gray-700">
            Our mission is to empower organizations in these vital industries
            with innovative, scalable, technology-driven services that enhance
            operational efficiency and support long-term growth.
          </p>
        </div>

        {/* RIGHT COLUMNS */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 pt-6">
          {/* Increased pt-2 to pt-6 to move row slightly down */}

          {/* Browse More */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Browse More</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              {" "}
              {/* FIX: removed left indent */}
              <li className="py-1 hover:underline cursor-pointer">
                Mission & Vision
              </li>
              <li className="py-1 hover:underline cursor-pointer">History</li>
              <li className="py-1 hover:underline cursor-pointer">Why Us</li>
              <li className="py-1 hover:underline cursor-pointer">
                Certificates
              </li>
              <li className="py-1 hover:underline cursor-pointer">Timeline</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Resources</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              {" "}
              {/* FIX: aligned */}
              <li className="py-1 hover:underline cursor-pointer">Gallery</li>
              <li className="py-1 hover:underline cursor-pointer">Career</li>
              <li className="py-1 hover:underline cursor-pointer">QR Code</li>
              <li className="py-1 hover:underline cursor-pointer">Glossary</li>
              <li className="py-1 hover:underline cursor-pointer">Message</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Links</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              {" "}
              {/* FIX: perfect alignment */}
              <li className="py-1 hover:underline cursor-pointer">Calendar</li>
              <li className="py-1 hover:underline cursor-pointer">FAQ</li>
              <li className="py-1 hover:underline cursor-pointer">Payment</li>
              <li className="py-1 hover:underline cursor-pointer">
                Internship
              </li>
              <li className="py-1 hover:underline cursor-pointer">Download</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Explore</h3>
            <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
              {" "}
              {/* FIX: aligned */}
              <li className="py-1 hover:underline cursor-pointer">Videos</li>
              <li className="py-1 hover:underline cursor-pointer">
                Trello Board
              </li>
              <li className="py-1 hover:underline cursor-pointer">Location</li>
              <li className="py-1 hover:underline cursor-pointer">
                Refund Policy
              </li>
              <li className="py-1 hover:underline cursor-pointer">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* SOCIAL + CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-8 mt-10">
        {/* Added mt-10 for spacing from top section */}
        {/* SOCIAL ICONS */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <img
            src="/icons/x.svg"
            alt="X"
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            className="h-7 w-7 cursor-pointer"
          />
          
          <img
            src="/icons/youtube.svg"
            alt="YouTube"
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src="/icons/trello.svg"
            alt="Trello"
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src="/icons/signal.svg"
            alt="Signal"
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src="/icons/discord.svg"
            alt="Discord"
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src="/icons/viber.svg"
            alt="LinkedIn"
            className="h-7 w-7 cursor-pointer"
          />
        </div>

        {/* CONTACT BOXES */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* EMAIL + PHONE */}
          <div className="flex flex-col sm:flex-row items-stretch border-2 border-black rounded-lg overflow-hidden w-full sm:w-auto">
            <div className="flex items-center gap-2 px-6 py-3">
              <img src="/icons/email.svg" alt="email" className="h-6 w-6" />
              <span className="text-sm">info@sriyog.com</span>
            </div>

            {/* Divider */}
            <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-black w-full sm:w-auto"></div>

            <div className="flex items-center gap-2 px-6 py-3">
              <img src="/icons/phone.svg" alt="phone" className="h-6 w-6" />
              <span className="text-sm">+977-01-4548068</span>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-2 border-2 border-black rounded-lg px-6 py-3 w-full sm:w-auto">
            <img src="/icons/whatsapp.svg" alt="whatsapp" className="h-6 w-6" />
            <span className="text-sm">+977 98520-24-365</span>
          </div>
        </div>
      </div>
      {/* HORIZONTAL LINE BEFORE COPYRIGHT */}
      <div className="w-full border-t border-black mt-14 mb-6"></div>{" "}
      {/*   horizontal line */}
      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row justify-between text-[13px] text-black gap-3 text-center md:text-left font-semibold">
        <p>
          Copyright {currentYear} SRIYOG Consulting | Built With: BroadPress
        </p>{" "}
        {/*  Dynamic year */}
        <div className="flex gap-4 justify-center md:justify-end font-semibold text-black">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Disclaimer</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
