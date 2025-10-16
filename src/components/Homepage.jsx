import React from 'react';
import smartphoneImage from '../assets/smartphone.png';
import icon5 from '../assets/icon5.png';

function Homepage() {

  const contentBlock = {
    img: icon5,
    title: 'Lorem Ipsum is simply dummy text',
    desc: 'Lorem Ipsum is simply dummy text',
  };

  return (
    
    <section id="homepage-section" className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 md:px-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                
        <div className="flex-1 w-full max-w-2xl space-y-6 md:space-y-8 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={contentBlock.img}
                alt={contentBlock.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 font-poppins text-sm sm:text-base">
                {contentBlock.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                {contentBlock.desc}
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-poppins">
            <span className="text-[#1090CB] font-poppins">Lorem Ipsum</span> is simply dummy <br className="hidden md:block" /> text of the printing.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 font-poppins">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
          </p>
        </div>

        {/* Right: Smartphone Image */}
        <div className="flex-shrink-0 w-full md:w-auto md:ml-auto flex justify-center">
          <img
            src={smartphoneImage}
            alt="Smartphone mockup"
            className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
