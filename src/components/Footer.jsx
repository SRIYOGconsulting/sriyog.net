
import React from 'react';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-5">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Component */}
        <Newsletter />

        {/* Company Description */}
        <div className="text-center mb-8 px-5">
          <div className="text-3xl font-bold text-green-800 mb-3">SRIYOG</div>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd. is based in Kamalpokhari, Kathmandu, Nepal. We're a leading provider of digital transformation solutions for the healthcare, employment, and tourism sectors. Our mission is to help organizations in these key industries thrive through innovative, scalable technology services that boost efficiency and drive sustainable growth.
          </p>
        </div>

        {/* Footer Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5 px-5">
          <div className="footer-section">
            <h4 className="text-green-800 font-semibold mb-2">Browse More</h4>
            <ul className="list-none p-0 space-y-1">
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Mission & Vision</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">History</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Why Us</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Certificates</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Timeline</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-green-800 font-semibold mb-2">Resources</h4>
            <ul className="list-none p-0 space-y-1">
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Gallery</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Career</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">QR Code</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Glossary</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Message</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-green-800 font-semibold mb-2">Links</h4>
            <ul className="list-none p-0 space-y-1">
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Calendar</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">FAQ</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Payment</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Internship</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-green-800 font-semibold mb-2">Explore</h4>
            <ul className="list-none p-0 space-y-1">
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Videos</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Trello Board</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Download</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Location</a></li>
              <li><a href="#" className="text-gray-600 no-underline hover:text-green-800 transition-colors block py-1">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center px-5 mb-5 gap-4">
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-green-800 text-white text-center leading-8 rounded-full no-underline text-sm hover:bg-green-700 transition-colors">X</a>
            <a href="#" className="w-8 h-8 bg-green-800 text-white text-center leading-8 rounded-full no-underline text-sm hover:bg-green-700 transition-colors">LI</a>
            <a href="#" className="w-8 h-8 bg-green-800 text-white text-center leading-8 rounded-full no-underline text-sm hover:bg-green-700 transition-colors">YT</a>
            <a href="#" className="w-8 h-8 bg-green-800 text-white text-center leading-8 rounded-full no-underline text-sm hover:bg-green-700 transition-colors">IG</a>
            <a href="#" className="w-8 h-8 bg-green-800 text-white text-center leading-8 rounded-full no-underline text-sm hover:bg-green-700 transition-colors">DC</a>
          </div>
          <div className="flex flex-wrap gap-5 justify-center md:justify-end text-sm">
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 inline-block bg-gray-300 rounded"></span> {/* Simple placeholder for email icon */}
              <a href="mailto:info@srivog.com" className="text-gray-600 hover:text-green-800 no-underline">info@srivog.com</a>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 inline-block bg-gray-300 rounded"></span> {/* Simple placeholder for phone icon */}
              <span className="text-gray-600">+977-01-4548088</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 inline-block bg-gray-300 rounded"></span> {/* Simple placeholder for chat icon */}
              <span className="text-gray-600">+977 98520-24365</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-200 pt-3 px-5 text-sm">
          <p className="text-gray-600 mb-2">&copy; 2025 SRIYOG Consulting. Built with WordPress.</p>
          <div className="space-x-3">
            <a href="#" className="text-gray-600 hover:text-green-800 no-underline">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-green-800 no-underline">Disclaimer</a>
            <a href="#" className="text-gray-600 hover:text-green-800 no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;