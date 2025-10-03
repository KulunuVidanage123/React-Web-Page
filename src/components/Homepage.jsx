import React from 'react';
import smartphoneImage from '../assets/smartphone.png';
import icon5 from '../assets/icon5.png';

function Homepage() {
  return (
    <section className="py-16 bg-white relative">
      {/* Half-Circle Gradient — Center-Right Corner, Facing LEFT, Transparent, Larger */}
      <div
        className="absolute right-0 top-1/2 -translate-y-[50%] w-[450px] h-[450px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full z-10 opacity-30"
        
        style={{
          clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)', // Left half visible
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-lg space-y-8">
          <div className="text-left">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={icon5}
                  alt="Icon 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 font-poppins">Lorem Ipsum is simply dummy text</h3>
                <p className="text-sm text-gray-600 font-poppins">Lorem Ipsum is simply dummy text</p><br></br><br></br>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 font-poppins">
              <span className="text-blue-500 font-poppins">Lorem Ipsum</span> is simply dummy <br /> text of the printing.
            </h2><br></br><br></br>

            <p className="text-gray-600 mb-4 font-poppins">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
            </p>
          </div>
        </div>

        {/* Right: Smartphone Image */}
        <div className="flex-shrink-0 ml-auto relative">
          <img
            src={smartphoneImage}
            alt="Smartphone mockup"
            className="w-[700px] h-[500px] rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Homepage;