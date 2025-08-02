import React, { useState } from 'react';
import { cookooLogo } from '../assets';

// Navigation items configuration
const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'blog', label: 'Blog' },
  { id: 'videos', label: 'Videos' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
];

// Mobile menu icon components
const MenuIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16" 
    />
  </svg>
);

const CloseIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

// Navigation Link Component
const NavigationLink = ({ 
  item, 
  isActive, 
  onClick,
  isMobile = false 
}: {
  item: { id: string; label: string };
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`
      ${isMobile 
        ? 'block w-full text-left px-4 py-3 text-lg border-b border-gray-100' 
        : 'text-base relative flex items-center'
      }
      font-medium
      transition-colors duration-300
      focus:outline-none
      focus:ring-2 focus:ring-[#F21D3A] focus:ring-opacity-50
      ${isActive 
        ? 'text-[#F21D3A]' 
        : 'text-gray-700 hover:text-[#F21D3A]'
      }
    `}
  >
    {item.label}
    {/* Red underline for active state on desktop */}
    {!isMobile && isActive && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F21D3A] transition-all duration-300"></div>
    )}
  </button>
);

// Action Button Component
const ActionButton = ({ 
  variant, 
  children, 
  onClick,
  className = ""
}: {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const baseClasses = `
    px-4 sm:px-6 
    py-2 sm:py-2.5 
    rounded-full 
    font-medium 
    text-sm sm:text-base
    transition-all duration-300
    focus:outline-none 
    focus:ring-2 focus:ring-opacity-50
    hover:transform hover:scale-105
    active:scale-95
    flex items-center justify-center
    h-10 sm:h-11
  `;
  
  const variantClasses = variant === 'primary' 
    ? `
      bg-[#F21D3A] 
      text-white 
      hover:bg-[#d81b3a] 
      focus:ring-[#F21D3A]
      shadow-lg hover:shadow-xl
    `
    : `
      bg-[#F6F6F6] 
      text-[#F21D3A] 
      hover:bg-gray-200 
      focus:ring-gray-300
      border border-gray-200
    `;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

const Header: React.FC = () => {
  // State management
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Event handlers
  const handleNavigationClick = (itemId: string) => {
    setActiveSection(itemId);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePartnerClick = () => {
    console.log('Become a partner clicked');
    // Add your partner logic here
  };

  const handleLoginClick = () => {
    console.log('Login clicked');
    // Add your login logic here
  };

  return (
    <header className="w-full relative z-40">
      <div className="
        max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-1 sm:py-1.5 lg:py-2
      ">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 -ml-6">
            <img 
              src={cookooLogo} 
              alt="Cookoo - Food Delivery Platform" 
              className="
                h-10 sm:h-12 lg:h-14 
                w-auto 
                transition-transform duration-300
                hover:scale-105
              "
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-6 xl:space-x-10">
              {navigationItems.map((item) => (
                <NavigationLink
                  key={item.id}
                  item={item}
                  isActive={activeSection === item.id}
                  onClick={() => handleNavigationClick(item.id)}
                />
              ))}
            </nav>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 xl:space-x-4">
              <ActionButton 
                variant="secondary" 
                onClick={handlePartnerClick}
                className="hidden xl:block"
              >
                Become A Partner
              </ActionButton>
              
              <ActionButton 
                variant="primary" 
                onClick={handleLoginClick}
              >
                Login
              </ActionButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="
                p-2 
                text-gray-700 
                hover:text-[#F21D3A] 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#F21D3A] 
                focus:ring-opacity-50
                rounded-md
                transition-colors duration-300
              "
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          lg:hidden 
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
          }
        `}>
          <div className="
            bg-white 
            border border-gray-200 
            rounded-lg 
            shadow-lg 
            overflow-hidden
          ">
            {/* Mobile Navigation Links */}
            <nav className="py-2">
              {navigationItems.map((item) => (
                <NavigationLink
                  key={item.id}
                  item={item}
                  isActive={activeSection === item.id}
                  onClick={() => handleNavigationClick(item.id)}
                  isMobile={true}
                />
              ))}
            </nav>
            
            {/* Mobile Action Buttons */}
            <div className="
              px-4 py-4 
              bg-gray-50 
              border-t border-gray-200 
              space-y-3
            ">
              <ActionButton 
                variant="secondary" 
                onClick={handlePartnerClick}
                className="w-full justify-center"
              >
                Become A Partner
              </ActionButton>
              
              <ActionButton 
                variant="primary" 
                onClick={handleLoginClick}
                className="w-full justify-center"
              >
                Login
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
