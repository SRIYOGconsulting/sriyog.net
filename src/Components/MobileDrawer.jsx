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
      path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
    },
    {
      href: 'https://www.youtube.com/',
      label: 'YouTube',
      path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    },
    {
      href: 'https://www.instagram.com/',
      label: 'Instagram',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
    },
    {
      href: 'https://www.linkedin.com/company/',
      label: 'LinkedIn',
      path: 'M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.4.9 3.4 4.2z'
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

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  const closeDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  if (!isMobile) return null;

  return (
    <>
      {/* HAMBURGER BUTTON — moved even MORE UP */}
      <div className="relative w-full">
        <button
          onClick={toggleDrawer}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-[150%]   /* ⬆️ moved UP TWO LEVELS */
            md:hidden
            z-50
            p-2
            rounded
          "
          style={{
            background: 'var(--header)',
            color: 'var(--text)'
          }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

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

          <nav className="flex flex-col space-y-6 py-4">
            {[
              { to: '/', label: 'Home', icon: 'M3 12l2-2m0...' },
              { to: '/about', label: 'About', icon: 'M13 16h-1...' },
              { to: '/services', label: 'Services', icon: 'M4 5a1...' },
              { to: '/feedback', label: 'Feedback', icon: 'M8 10h.01...' },
              { to: '/team', label: 'Team', icon: 'M17 20h5v...' },
              { to: '/contact', label: 'Contact', icon: 'M3 8l7...' }
            ].map((item) => (
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
                  className="w-full border rounded-lg px-6 py-2.5 hover:bg-opacity-10 hover:bg-gray-300 transition-colors duration-200"
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
                  className="w-full bg-teal-900 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors duration-200"
                >
                  Notice
                </button>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-opacity-10 border-gray-300">
              <p className="text-xs font-medium text-gray-500 mb-3 text-center">
                Connect With Us
              </p>
              <div className="flex flex-wrap justify-center gap-3 px-2">
                {/* social icons unchanged */}
              </div>
            </div>
          </nav>
        </div>
      </div>

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
