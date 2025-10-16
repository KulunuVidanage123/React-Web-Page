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
    <footer className="bg-white border-t border-gray-200 py-6 sm:py-8 lg:py-12 font-poppins">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 text-center md:text-left">
          {/* Logo & Info */}
          <div className="mb-2 md:mb-0">
            <h4 className="text-lg font-bold text-[#00329B] mb-2 font-poppins">LOGO</h4>
            <p className="text-gray-600 mb-2 font-poppins">
              Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
            </p>
            <p className="text-gray-600 font-poppins">@Lorem</p>
          </div>

          {/* About Us */}
          <div className="mb-2 md:mb-0">
            <h5 className="font-medium mb-2 font-poppins">About us</h5>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 font-poppins">Lorem</a></li>
              <li><a href="#" className="hover:text-blue-600 font-poppins">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600 font-poppins">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 font-poppins">Contact us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start mb-2 md:mb-0">
            <div className="ml-0 sm:ml-[-60px] md:ml-[-100px] lg:ml-[-140px] xl:ml-[-180px] transition-all duration-300 text-center md:text-left">
              <h5 className="font-medium mb-2 font-poppins">Contact us</h5>
              <p className="text-gray-600 mb-2 font-poppins">
                Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry.
              </p>
              <p className="text-gray-600 font-poppins">+90889097890</p>
            </div>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end mt-2 md:-mt-10 -pr-0 md:-pr-[600px]">
          <div className="flex items-center gap-0">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:scale-110 transition-transform"
              >
                <img 
                  src={social.icon} 
                  alt={social.alt} 
                  className="w-[48px] h-[48px] object-contain" 
                />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-4 sm:mt-8 pt-6 sm:pt-10 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 font-poppins inline-block">
          Copyright
          <span className="text-[20px] mx-2 relative -top-0 inline-block">®</span>
          2021 Lorem All rights Rcerved
        </p>
      </div>
    </footer>

  );
}

export default Footer;
