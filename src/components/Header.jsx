import React, { useState } from 'react';

function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (elementId, tabName) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(tabName);
    }
  };

  const getTabClasses = (tabName) => {
    const baseClasses = "text-sm font-medium relative cursor-pointer font-poppins transition-colors duration-200";
    const activeClasses = "text-blue-500 after:content-[''] after:absolute after:top-[-10px] after:left-1 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-green-500 after:rounded-full";
    const inactiveClasses = "text-gray-700 hover:text-blue-500";
    
    return `${baseClasses} ${activeTab === tabName ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 h-16 bg-white border-b border-blue-100">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-500 font-poppins">LOGO</div>

      {/* Right: Nav + Contact Button grouped together */}
      <div className="flex items-center gap-8">
        {/* Navigation */}
        <nav className="flex gap-8 space-x-16">
          <a
            onClick={() => scrollToSection('slider-section', 'home')}
            href="#slider-section"
            className={getTabClasses('home')}
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('herotext-section', 'about')}
            href="#herotext-section"
            className={getTabClasses('about')}
          >
            About us
          </a>
          <a 
            onClick={() => scrollToSection('homepage-section', 'services')}
            href="#homepage-section"
            className={getTabClasses('services')}
          >
            Services
          </a>
          <a 
            onClick={() => scrollToSection('cards-section', 'blog')}
            href="#cards-section"
            className={getTabClasses('blog')}
          >
            Blog
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="#"
          className="text-sm font-medium text-white bg-blue-500 px-9 py-3 rounded-md hover:bg-blue-600 font-poppins transition-colors duration-200"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}

export default Header;