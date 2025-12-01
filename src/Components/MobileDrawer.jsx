import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Reusable Social Icon Component
const SocialIcon = ({ href, label, children }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label={label}
  >
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      {children}
    </svg>
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
