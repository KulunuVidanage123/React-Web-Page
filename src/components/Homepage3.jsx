import React from 'react';
import vrImage from '../assets/VRHeadset.png'; 
import icon5 from '../assets/icon7.png';

function Homepage3() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-lg space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={icon5}
                alt="Icon 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Lorem Ipsum is simply dummy text</h3>
              <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text</p>
            </div><br></br>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            <span className="text-blue-500">Lorem Ipsum</span> is simply dummy <br /> text of the printing.
          </h2><br></br>

          <p className="text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
          </p>
        </div>

        {/* Right: VR Image with Gradient Circle */}
        <div className="flex-shrink-0 relative"> {/* ✅ relative container for absolute positioning */}
          {/* Gradient light purple circle — middle right */}

          <div
            className="absolute top-1/2 right-16 transform translate-y-[-40%] translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #ede9fe, #ddd6fe, #c4b5fd)',
              zIndex: 1,
            }}
          ></div>

          {/* Image on top */}
          <img
            src={vrImage}
            alt="VRHeadset mockup"
            className="relative z-10 w-[500px] h-[400px] rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Homepage3;