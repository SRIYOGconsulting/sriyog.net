
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
                className="w-[180px] sm:w-[200px] h-auto"
              />
            </Link>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-700 mb-4">
            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd.,
            based in Kamalpokhari, Kathmandu, Nepal, is a leading
            provider of digital solutions dedicated to driving digital
            transformation in the healthcare, employment, and
            tourism sectors.
          </p>

          <p className="text-[15px] leading-relaxed text-gray-700">
            Our mission is to empower organizations in these vital
            industries with innovative, scalable, technology-driven
            services that enhance operational efficiency and support
            long-term growth.
          </p>
        </div>

        {/* RIGHT COLUMNS */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Browse More</h3>
            <ul className="space-y-2 text-[15px]">
              <li className="cursor-pointer hover:underline">Mission & Vision</li>
              <li className="cursor-pointer hover:underline">History</li>
              <li className="cursor-pointer hover:underline">Why Us</li>
              <li className="cursor-pointer hover:underline">Certificates</li>
              <li className="cursor-pointer hover:underline">Timeline</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Resources</h3>
            <ul className="space-y-2 text-[15px]">
              <li className="cursor-pointer hover:underline">Gallery</li>
              <li className="cursor-pointer hover:underline">Career</li>
              <li className="cursor-pointer hover:underline">QR Code</li>
              <li className="cursor-pointer hover:underline">Glossary</li>
              <li className="cursor-pointer hover:underline">Message</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Links</h3>
            <ul className="space-y-2 text-[15px]">
              <li className="cursor-pointer hover:underline">Calendar</li>
              <li className="cursor-pointer hover:underline">FAQ</li>
              <li className="cursor-pointer hover:underline">Payment</li>
              <li className="cursor-pointer hover:underline">Internship</li>
              <li className="cursor-pointer hover:underline">Download</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[16px]">Explore</h3>
            <ul className="space-y-2 text-[15px]">
              <li className="cursor-pointer hover:underline">Videos</li>
              <li className="cursor-pointer hover:underline">Trello Board</li>
              <li className="cursor-pointer hover:underline">Location</li>
              <li className="cursor-pointer hover:underline">Refund Policy</li>
              <li className="cursor-pointer hover:underline">Cookie Policy</li>
            </ul>
          </div>

        </div>
      </div>

      {/* SOCIAL + CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 flex flex-col lg:flex-row justify-between gap-8">

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <img src="/icons/x.svg" alt="X" className="h-6 w-6 cursor-pointer" />
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6 cursor-pointer" />
          <img src="/icons/youtube.svg" alt="YouTube" className="h-6 w-6 cursor-pointer" />
          <img src="/icons/trello.svg" alt="Trello" className="h-6 w-6 cursor-pointer" />
          <img src="/icons/discord.svg" alt="Discord" className="h-6 w-6 cursor-pointer" />
        </div>

        {/* CONTACT BOXES */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">

          {/* EMAIL + PHONE */}
          <div className="flex flex-col sm:flex-row items-stretch border-2 border-black rounded-lg overflow-hidden w-full sm:w-auto">

            <div className="flex items-center gap-2 px-6 py-3">
              <img src="/icons/mail.svg" alt="email" className="h-4 w-4" />
              <span className="text-sm">info@sriyog.com</span>
            </div>

            {/* Divider */}
            <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-black w-full sm:w-auto"></div>

            <div className="flex items-center gap-2 px-6 py-3">
              <img src="/icons/phone.svg" alt="phone" className="h-4 w-4" />
              <span className="text-sm">+977-01-4548068</span>
            </div>

          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-2 border-2 border-black rounded-lg px-6 py-3 w-full sm:w-auto">
            <img src="/icons/whatsapp.svg" alt="whatsapp" className="h-4 w-4" />
            <span className="text-sm">+977 98520-24-365</span>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row justify-between text-[13px] text-black gap-3 text-center md:text-left font-semibold">
        <p>Copyright 2025 SRIYOG Consulting | Built With: BroadPress</p>

        <div className="flex gap-4 justify-center md:justify-end font-semibold text-black">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Disclaimer</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Terms of Service</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
