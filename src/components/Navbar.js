import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 lg:h-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Team BRH</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/services" className="text-white hover:text-gray-300">Services</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block text-white px-2 py-1 hover:bg-gray-700">Home</a>
          <a href="/about" className="block text-white px-2 py-1 hover:bg-gray-700">About</a>
          <a href="/services" className="block text-white px-2 py-1 hover:bg-gray-700">Services</a>
          <a href="/contact" className="block text-white px-2 py-1 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
