import React from 'react';
import facebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/Instagram.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png'; 

function Footer() {
  const socialIcons = [
    { icon: facebookIcon, alt: "Facebook" },
    { icon: InstagramIcon, alt: "Instagram" },
    { icon: twitterIcon, alt: "Twitter" },
    { icon: linkedinIcon, alt: "LinkedIn" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-8 font-poppins lg:py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Left: Logo & Info */}
          <div>
            <h4 className="text-lg font-bold text-[#00329B] mb-4">LOGO</h4>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.
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

          {/* Right: Contact Info */}
          <div className="flex flex-col items-start">
            <div className="ml-12 sm:ml-[-60px] md:ml-[-100px] lg:ml-[-140px] xl:ml-[-180px] transition-all duration-300">
              <h5 className="font-medium mb-4">Contact us</h5>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry.
              </p>
              <p className="text-gray-600">+90889097890</p>
            </div>
          </div>


        </div>

        {/* Social Icons - Separate Row */}
        <div className="flex justify-end mt-1 md:-mt-10 -pr-[600px]">
          <div className="flex items-center gap-1">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <img 
                  src={social.icon} 
                  alt={social.alt} 
                  className="w-10 h-10 object-contain" 
                />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
        Copyright © 2021 Lorem. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
