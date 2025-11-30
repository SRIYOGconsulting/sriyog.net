import React, { useState, useEffect } from 'react';

const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState('medium');

  useEffect(() => {
    // Get saved font size from localStorage
    const savedSize = localStorage.getItem('fontSize') || 'medium';
    setFontSize(savedSize);
    applyFontSize(savedSize);
  }, []);

  const applyFontSize = (size) => {
    // Apply font size only to content paragraphs
    const contentElements = document.querySelectorAll('.content-text');
    
    let textSize;
    switch(size) {
      case 'small':
        textSize = '0.875rem'; // 14px
        break;
      case 'medium':
        textSize = '1rem'; // 16px
        break;
      case 'large':
        textSize = '1.125rem'; // 18px
        break;
      default:
        textSize = '1rem';
    }
    
    contentElements.forEach(element => {
      element.style.fontSize = textSize;
    });
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    applyFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
      <span className="text-gray-700 font-medium text-sm">Change Font Size:</span>
      <div className="flex gap-2">
        <button
          onClick={() => changeFontSize('small')}
          className={`w-10 h-10 flex items-center justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === 'small'
              ? 'border-teal-600 bg-teal-50 text-teal-700'
              : 'border-gray-300 text-gray-600 hover:border-teal-400 hover:bg-gray-50'
          }`}
          title="Small font size"
        >
          <span className="text-sm">A</span>
        </button>
        
        <button
          onClick={() => changeFontSize('medium')}
          className={`w-10 h-10 flex items-center justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === 'medium'
              ? 'border-teal-600 bg-teal-50 text-teal-700'
              : 'border-gray-300 text-gray-600 hover:border-teal-400 hover:bg-gray-50'
          }`}
          title="Medium font size"
        >
          <span className="text-base">A</span>
        </button>
        
        <button
          onClick={() => changeFontSize('large')}
          className={`w-10 h-10 flex items-center justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === 'large'
              ? 'border-teal-600 bg-teal-50 text-teal-700'
              : 'border-gray-300 text-gray-600 hover:border-teal-400 hover:bg-gray-50'
          }`}
          title="Large font size"
        >
          <span className="text-lg">A</span>
        </button>
      </div>
    </div>
  );
};

export default FontSizeChanger;