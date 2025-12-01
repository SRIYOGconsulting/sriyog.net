import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Reusable Social Icon Component
const SocialIcon = ({ href, label, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label={label}
  >
    <img 
      src={`/icons/${icon}`} 
      alt={label}
      className="w-5 h-5"
      aria-hidden="true"
    />
  </a>
);

// Navigation Item Component
const NavItem = ({ to, label, icon, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-opacity-10 hover:bg-gray-300"
  >
    <span className="p-2 rounded-full bg-opacity-20 bg-gray-300 group-hover:bg-opacity-30 transition-all duration-200">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </span>
    <span className="font-medium">{label}</span>
    <span className="flex-1"></span>
    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </Link>
);

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Navigation data
  const navItems = [
    { to: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { to: '/about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { to: '/services', label: 'Services', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    { to: '/feedback', label: 'Feedback', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { to: '/team', label: 'Team', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { to: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  // Social media data
  const socialLinks = [
    {
      href: 'https://www.facebook.com/',
      label: 'Facebook',
      icon: 'facebook.svg'
    },
    {
      href: 'https://www.youtube.com/',
      label: 'YouTube',
      icon: 'youtube.svg'
    },
    {
      href: 'https://www.linkedin.com/',
      label: 'LinkedIn',
      icon: 'linkedin.svg'
    },
    {
      href: 'https://t.me/',
      label: 'Telegram',
      icon: 'telegram.svg'
    },
    {
      href: 'https://wa.me/',
      label: 'WhatsApp',
      icon: 'whatsapp.svg'
    },
    {
      href: 'https://www.messenger.com/',
      label: 'Messenger',
      icon: 'messenger.svg'
    },
    {
      href: 'https://www.viber.com/',
      label: 'Viber',
      icon: 'viber.svg'
    }
  ];

  // Handle window resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle drawer and body overflow
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  // Close drawer and reset body overflow
  const closeDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleDrawer}
        className="fixed top-4 right-4 z-50 p-2 rounded"
        style={{
          background: 'var(--header)',
          color: 'var(--text)'
        }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'var(--header)',
          color: 'var(--text)'
        }}
      >
        <div className="p-6 overflow-y-auto h-full">
          {/* Logo and Close Button */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-opacity-10 border-gray-300">
            <Link to="/" onClick={closeDrawer} className="block">
              <img
                src="/images/Logo/sriyoglogo.svg"
                alt="Sriyog Logo"
                className="w-40 h-auto"
              />
            </Link>
            <button
              onClick={closeDrawer}
              className="text-2xl p-1 -mr-2"
              style={{ color: 'var(--text)' }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 py-4">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                icon={item.icon}
                onClick={closeDrawer}
              />
            ))}

            <div className="pt-4 space-y-4">
              <Link to="/career" onClick={closeDrawer} className="block">
                <button
                  className="w-full border rounded-lg px-6 py-2.5 hover:bg-opacity-10 hover:bg-gray-300 transition-colors duration-200 text-base font-medium"
                  style={{
                    borderColor: 'var(--text)',
                    color: 'var(--text)'
                  }}
                >
                  Career
                </button>
              </Link>
              <Link to="/notice" onClick={closeDrawer} className="block">
                <button 
                  className="w-full bg-teal-900 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors duration-200 text-base font-medium"
                >
                  Notice
                </button>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="mt-4 pt-3 border-t border-opacity-10 border-gray-300">
              <p className="text-xs font-medium text-gray-500 mb-3 text-center">
                Connect With Us
              </p>
              <div className="flex flex-wrap justify-center gap-3 px-2">
                {socialLinks.map((social) => (
                  <SocialIcon 
                    key={social.href} 
                    href={social.href} 
                    label={social.label}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Hide desktop nav on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .header nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default MobileDrawer;

