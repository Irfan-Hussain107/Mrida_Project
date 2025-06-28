import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // CRITICAL: Ensure Link is imported

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Using absolute path for images in public directory */}
          <img src="/mrida_logo.png" alt="Mrida Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">Mrida</span>
        </div>

        {/* Desktop Nav - Using <Link> components */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/rent-buy-tools" className="hover:underline" onClick={() => setIsOpen(false)}>Rent/Buy Tools</Link>
          <Link to="/sell-tools" className="hover:underline" onClick={() => setIsOpen(false)}>Sell Tools</Link>
          <Link to="/post-labour-jobs" className="hover:underline" onClick={() => setIsOpen(false)}>Post Labour Job</Link>
          <Link to="/find-work" className="hover:underline" onClick={() => setIsOpen(false)}>Find Work</Link>
          <Link to="/dashboard" className="hover:underline" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/login" className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100" onClick={() => setIsOpen(false)}>Login/Register</Link>
        </nav>

        {/* Hamburger Button */}
        <button id="menu-btn" className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Using <Link> components */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-0 w-full z-40 bg-green-600 transform origin-top
          transition-all duration-300 ease-in-out md:hidden px-4 pb-4 space-y-2
          ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        {/* onClick={toggleMenu} closes the menu after navigation. */}
        <Link to="/" className="block py-2 hover:underline" onClick={toggleMenu}>Home</Link>
        <Link to="/rent-buy-tools" className="block py-2 hover:underline" onClick={toggleMenu}>Rent/Buy Tools</Link>
        <Link to="/sell-tools" className="block py-2 hover:underline" onClick={toggleMenu}>Sell Tools</Link>
        <Link to="/post-labour-jobs" className="block py-2 hover:underline" onClick={toggleMenu}>Post Labour Job</Link>
        <Link to="/find-work" className="block py-2 hover:underline" onClick={toggleMenu}>Find Work</Link>
        <Link to="/dashboard" className="block py-2 hover:underline" onClick={toggleMenu}>Dashboard</Link>
        <Link to="/login" className="block py-2 bg-white text-green-700 px-4 rounded hover:bg-green-100" onClick={toggleMenu}>Login/Register</Link>
      </div>
    </header>
  );
}

export default Navbar;
