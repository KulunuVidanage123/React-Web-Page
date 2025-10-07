import React from 'react';
import facebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/Instagram.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png'; 

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 font-poppins">
      <div className="max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Logo & Info */}
        <div className="md:ml-32">
          <h4 className="text-lg font-bold text-blue-600 mb-4">LOGO</h4>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-600">@Lorem</p>
        </div>

        {/* Center: About Us Links */}
        <div className="md:ml-48">
          <h5 className="font-medium mb-4">About us</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Lorem</a></li>
            <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
          </ul>
        </div>

        {/* Right: Contact Info + Icons (icons inside this column) */}
        <div className="md:ml-24">
          <h5 className="font-medium mb-4">Contact us</h5>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          
          {/* Phone number and icons on same line */}
          <div className="flex items-center justify-between">
            <span className="text-gray-600">+90889097890</span>
            <div className="md:ml-60 flex gap-{-2}">

              <a href="#"
                className="w-16 h-16 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <img src={facebookIcon} alt="Facebook" className="w-16 h-16 object-contain" />
              </a>

              <a href="#"
                className="w-16 h-16 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-16 h-16 object-contain" />
              </a>

              <a href="#"
                className="w-16 h-16 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <img src={twitterIcon} alt="twitter" className="w-16 h-16 object-contain" />
              </a>

              <a href="#"
                className="w-16 h-16 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <img src={linkedinIcon} alt="linkedin" className="w-16 h-16 object-contain" />
              </a>

            </div>
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