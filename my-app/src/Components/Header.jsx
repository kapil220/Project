import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);

  const shopItems = [
    'New Arrivals',
    'Best Sellers',
    'Shop All',
    'Gift Cards'
  ];

  const learnItems = [
    'About Us',
    'Our Story',
    'Ingredients',
    'Blog'
  ];

  return (
    <div className="w-full relative">
      {/* Cyber Monday Banner */}
      <div className="w-full bg-[#1e2875] text-white text-center py-2 text-sm">
        CYBER MONDAY FREE REUSABLE TOTE WITH EVERY ORDER
      </div>

      {/* Main Header */}
      <header className="bg-[#fdf6f0] px-4 lg:px-8 py-4">
        <div className="max-w-full mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#1e2875]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button 
                  className="text-[#1e2875] font-bold"
                  onClick={() => {
                    setShowShopDropdown(!showShopDropdown);
                    setShowLearnDropdown(false);
                  }}
                >
                  SHOP ▼
                </button>
                {showShopDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {shopItems.map((item, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-[#1e2875] hover:bg-[#fdf6f0]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/bundles" className="text-[#1e2875] font-bold">
                BUNDLES
              </Link>
            </nav>

            {/* Logo */}
            <Link to="/" className="text-[#1e2875] text-2xl font-bold">
              wildwonder®
            </Link>

            {/* Desktop Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button 
                  className="text-[#1e2875] font-bold"
                  onClick={() => {
                    setShowLearnDropdown(!showLearnDropdown);
                    setShowShopDropdown(false);
                  }}
                >
                  LEARN ▼
                </button>
                {showLearnDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {learnItems.map((item, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-[#1e2875] hover:bg-[#fdf6f0]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/find" className="text-[#1e2875] font-bold">
                FIND WILDWONDER
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-[#1e2875] text-xl">👤</button>
              <button className="text-[#1e2875] text-xl">🛒</button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <div>
                  <button 
                    className="text-[#1e2875] font-bold w-full text-left"
                    onClick={() => setShowShopDropdown(!showShopDropdown)}
                  >
                    SHOP {showShopDropdown ? '▼' : '▶'}
                  </button>
                  {showShopDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {shopItems.map((item, index) => (
                        <button
                          key={index}
                          className="block text-[#1e2875] hover:underline"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/bundles" className="text-[#1e2875] font-bold">BUNDLES</Link>
                <div>
                  <button 
                    className="text-[#1e2875] font-bold w-full text-left"
                    onClick={() => setShowLearnDropdown(!showLearnDropdown)}
                  >
                    LEARN {showLearnDropdown ? '▼' : '▶'}
                  </button>
                  {showLearnDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {learnItems.map((item, index) => (
                        <button
                          key={index}
                          className="block text-[#1e2875] hover:underline"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/find" className="text-[#1e2875] font-bold">FIND WILDWONDER</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showShopDropdown || showLearnDropdown) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowShopDropdown(false);
            setShowLearnDropdown(false);
          }}
        />
      )}
    </div>
  );
};

export default Header;