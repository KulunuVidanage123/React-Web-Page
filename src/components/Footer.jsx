import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      {/* Reduce gap between columns using gap-3 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Logo & Info */}
        <div>
          <h4 className="text-lg font-bold text-blue-600 mb-4">LOGO</h4>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-600">@Lorem</p>
        </div>

        {/* Center: About Us Links */}
        <div>
          <h5 className="font-medium mb-4">About us</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Lorem</a></li>
            <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
          </ul>
        </div>

        {/* Right: Contact Info + Icons */}
        <div>
          <h5 className="font-medium mb-4">Contact us</h5>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-600 mb-4">+908 89097 890</p>
          {/* Icons aligned to right corner */}
          <div className="flex justify-end gap-4">
            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              f
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              📷
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              t
            </a>
            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              in
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
        Copyright © 2021 Lorem All rights reserved
      </div>
    </footer>
  );
}

export default Footer;