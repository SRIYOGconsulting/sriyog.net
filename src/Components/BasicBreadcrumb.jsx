import React from 'react';
import { Link } from 'react-router-dom';

const BasicBreadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-4 px-4 md:px-8 shadow-sm">
      <ol className="flex flex-wrap items-center max-w-7xl mx-auto text-sm gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          
          return (
            <li 
              key={index} 
              className="flex items-center group"
            >
              {isLast ? (
                <span className="text-gray-700 font-semibold bg-white px-3 py-1.5 rounded-md shadow-sm">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link 
                    to={item.path}
                    className="flex items-center gap-1.5 text-teal-700 hover:text-teal-900 hover:bg-white px-3 py-1.5 rounded-md transition-all duration-200 hover:shadow-sm"
                  >
                    {isFirst && <span className="text-lg"></span>}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  <span className="mx-1 text-gray-400 text-base">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BasicBreadcrumbs;