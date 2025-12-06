import React from 'react';
import { Link } from 'react-router-dom';
import Ribbon from '../Components/Ribbon';

const Sitemap = () => {
  
  const sitePages = [
    {
      category: 'Main Pages',
      pages: [
        { path: '/', name: 'Home', description: 'Welcome to SRIYOG Consulting' },
        { path: '/about', name: 'About', description: 'Learn about our company' },
        { path: '/services', name: 'Services', description: 'Our service offerings' },
        { path: '/contact', name: 'Contact', description: 'Get in touch with us' },
      ]
    },
    {
      category: 'Company Information',
      pages: [
        { path: '/vmgo', name: 'Vision, Mission, Goals & Objectives', description: 'Our company values and objectives' },
        { path: '/history', name: 'History', description: 'Our company history' },
        { path: '/whyus', name: 'Why Us', description: 'Why choose SRIYOG Consulting' },
        { path: '/team', name: 'Team', description: 'Meet our team members' },
      ]
    },
    {
      category: 'Resources',
      pages: [
        { path: '/gallery', name: 'Gallery', description: 'Photo gallery' },
        { path: '/certificates', name: 'Certificates', description: 'Our certifications' },
        { path: '/timeline', name: 'Timeline', description: 'Company timeline' },
        { path: '/videos', name: 'Videos', description: 'Video content' },
      ]
    },
    {
      category: 'Services & Support',
      pages: [
        { path: '/feedback', name: 'Feedback', description: 'Share your feedback' },
        { path: '/message', name: 'Message', description: 'Send us a message' },
        { path: '/notice', name: 'Notice', description: 'Important notices' },
        { path: '/payment', name: 'Payment', description: 'Payment information' },
        { path: '/qr', name: 'QR Codes', description: 'Quick access QR codes' },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Ribbon name="Sitemap"/>

        {/* Sitemap Content */}
        <div className="space-y-8">
          {sitePages.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-6 pb-3 border-b" style={{ 
                color: 'var(--text)',
                borderColor: 'var(--border)'
              }}>
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.pages.map((page, pageIndex) => (
                  <Link
                    key={pageIndex}
                    to={page.path}
                    className="block p-4 rounded-lg border transition-all hover:shadow-md hover:scale-[1.02]"
                    style={{
                      borderColor: 'var(--border)',
                      background: 'var(--bg)',
                      color: 'var(--text)'
                    }}
                  >
                    <h3 className="font-semibold text-lg mb-2 hover:text-teal-700 transition">
                      {page.name}
                    </h3>
                    <p className="text-sm opacity-75 mb-2">{page.description}</p>
                    <span className="text-xs opacity-60" style={{ color: 'var(--text)' }}>
                      {page.path}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 card rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 pb-3 border-b" style={{ 
            color: 'var(--text)',
            borderColor: 'var(--border)'
          }}>
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-3">
            {sitePages.flatMap(category => 
              category.pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="px-4 py-2 rounded border hover:bg-opacity-10 hover:bg-teal-700 transition"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text)'
                  }}
                >
                  {page.name}
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm opacity-60" style={{ color: 'var(--text)' }}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">Total pages: {sitePages.reduce((sum, cat) => sum + cat.pages.length, 0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;

