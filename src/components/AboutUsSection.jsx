// src/components/AboutUsSection.jsx 
import React from 'react';

function AboutUsSection() {
  return (
    <div className="mb-2 md:mb-0 md:text-center lg:text-left">
      <h5 className="text-[17px] font-mildbold mb-6 font-poppins">About us</h5>
      <ul className="space-y-1 text-[16px] text-[#515151]">
        <li><a href="#" className="hover:text-blue-600 font-poppins">Lorem</a></li>
        <li><a href="#" className="hover:text-blue-600 font-poppins">Portfolio</a></li>
        <li><a href="#" className="hover:text-blue-600 font-poppins">Careers</a></li>
        <li><a href="#" className="hover:text-blue-600 font-poppins">Contact us</a></li>
      </ul>
    </div>
  );
}

export default AboutUsSection;