import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 h-16 bg-white border-b border-blue-100">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-500">LOGO</div>

      {/* Right: Nav + Contact Button grouped together */}
      <div className="flex items-center gap-8">
        {/* Navigation */}
        <nav className="flex gap-8 space-x-16">
          <a
            href="#"
            className="text-sm font-medium text-blue-500 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-blue-500 after:rounded-full"
          >
            Home
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-500">
            About us
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-500">
            Blog
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="#"
          className="text-sm font-medium text-white bg-blue-500 px-4 py-1.5 rounded-md hover:bg-blue-600"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}

export default Header;