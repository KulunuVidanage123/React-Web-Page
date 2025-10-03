import React from 'react';
import developerImg from '../assets/developer.png';
import figure1 from '../assets/figure1.png'; // ✅ Import the new image
import figure2 from '../assets/figure2.png'; 

function Slider() {
  return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 border-b border-gray-200 relative font-poppins">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Experienced <span className="text-blue-500">mobile and web</span> applications and website <br /> builders measuring.
          </h1><br></br>
          <p className="text-gray-600 mb-6 font-poppins">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of 
            completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
          </p><br></br>
          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-5 py-2 rounded font-medium hover:bg-blue-600 font-poppins">
              Contact us
            </button>
            <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded font-medium hover:bg-blue-50 font-poppins">
              View more
            </button>
          </div>
        </div>

        {/* Right: Developer Image */}
        <div className="flex-shrink-0">
          <img
            src={developerImg}
            alt="Developer working"
            className="w-[700px] h-[500px] rounded-xl object-contain"
          />
        </div>
      </div>

      {/* 👇 Floating Figure1 Image at bottom-Right Corner */}
      <div className="absolute bottom-8 right-8 z-10">
        <img
          src={figure1}
          alt="Decorative figure"
          className="w-18 h-18 object-contain"
        />
      </div>

      {/* 👇 Floating Figure2 Image at bottom-Left Corner */}
      <div className="absolute middle-8 left-8 z-10">
        <img
          src={figure2}
          alt="Decorative figure"
          className="w-18 h-18 object-contain"
        />
      </div>

    </section>
  );
}

export default Slider;