'use client'
import { useState } from 'react';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'HOME',
  },
  // '/blog': {
  //   name: 'blog',
  // },
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // },
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mb-16">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold">PORTFOLIO</h1>
        <button
          onClick={toggleMenu}
          className="relative w-10 h-10 flex flex-col justify-center items-center group"
        >
          <span className="sr-only">Toggle menu</span>
          <div
            className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:scale-110'
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 my-1 transition-opacity duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : 'group-hover:scale-110'
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:scale-110'
            }`}
          ></div>
        </button>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleMenu}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-3/4 max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-3 p-2 focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <div className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transform rotate-45 translate-y-1"></div>
              <div className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transform -rotate-45"></div>
            </button>
            <nav className="flex flex-col space-y-4">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="block py-2 px-4 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
