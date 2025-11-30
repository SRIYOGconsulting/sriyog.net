import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  // Close drawer
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
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={closeDrawer}
            className="mb-6 text-2xl"
            style={{ color: 'var(--text)' }}
          >
            ✕
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={closeDrawer} className="hover:text-teal-700">
              Home
            </Link>
            <Link to="/about" onClick={closeDrawer} className="hover:text-teal-700">
              About
            </Link>
            <Link to="/services" onClick={closeDrawer} className="hover:text-teal-700">
              Services
            </Link>
            <Link to="/feedback" onClick={closeDrawer} className="hover:text-teal-700">
              Feedback
            </Link>
            <Link to="/team" onClick={closeDrawer} className="hover:text-teal-700">
              Team
            </Link>
            <Link to="/contact" onClick={closeDrawer} className="hover:text-teal-700">
              Contact
            </Link>

            <div className="pt-4 space-y-3">
              <Link to="/career" onClick={closeDrawer}>
                <button
                  className="w-full border border-teal-900 rounded px-4 py-1 hover:bg-teal-50"
                  style={{
                    borderColor: 'var(--text)',
                    color: 'var(--text)'
                  }}
                >
                  Career
                </button>
              </Link>
              <Link to="/notice" onClick={closeDrawer}>
                <button className="w-full bg-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
                  Notice
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Hide desktop nav on mobile */}
      <style>{`
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

