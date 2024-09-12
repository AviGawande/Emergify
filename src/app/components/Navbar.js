'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-sans">
                Emergify
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="#features">Launches</NavLink>
              <NavLink href="#pricing">Products</NavLink>
              {/* Sign up button with gradient and glare effect */}
              <button className="animated-gradient-button">
                <span>Sign up</span>
              </button>
              <button className="animated-gradient-button">
                <span>Create a product</span>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <NavLink href="#features">Launches</NavLink>
            <NavLink href="#pricing">Products</NavLink>
            <button className="animated-gradient-button w-full text-left">
              <span>Sign up</span>
            </button>
            <button className="animated-gradient-button w-full text-left">
              <span>Create a product</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
