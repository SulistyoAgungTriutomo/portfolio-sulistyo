import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeNav, setActiveNav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false); // Tutup menu mobile setelah diklik
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 transition-all duration-500 ${
        activeNav === 'Home'
          ? 'bg-transparent border-b border-transparent'
          : 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('Home')}
          className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md cursor-pointer"
        >
          Sulistyo
        </button>

        {/* Menu Desktop (Layar Laptop/Tablet Besar) */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className={`relative py-1 transition-colors duration-300 cursor-pointer ${
                  activeNav === item ? 'text-white font-semibold' : 'text-text-muted hover:text-white'
                }`}
              >
                {item}
                {activeNav === item && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-green rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger (Khusus Layar HP / Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 mt-4 rounded-b-2xl animate-fade-in shadow-2xl">
          <ul className="flex flex-col space-y-4 text-center">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`w-full py-2 text-base font-semibold transition-colors duration-300 ${
                    activeNav === item ? 'text-accent-green' : 'text-text-muted hover:text-white'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;