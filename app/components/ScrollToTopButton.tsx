'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 w-12 h-12 bg-white text-gray-800 border-2 border-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-blue-100 focus:outline-none transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
