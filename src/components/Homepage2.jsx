import React from 'react';
import stacksImage from '../assets/stacks.png';
import icon5 from '../assets/icon6.png';

function Homepage2() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Website Mockup Image with Gradient Circle Background */}
        <div className="flex-shrink-0 relative">
          {/* Gradient light yellow circle in top-right */}
          
          <div
            className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #eef533ff, #fef3c7, #e9ef46ff)', // light yellow gradient
              zIndex: 1,
            }}
          ></div>

          {/* Image on top */}
          <img
            src={stacksImage}
            alt="Stacks mockup"
            className="relative z-10 w-[700px] h-[500px] rounded-xl object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-lg space-y-6">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={icon5}
                alt="Icon 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-gray-900">Lorem Ipsum is simply dummy text</h3>
              <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            <span className="text-blue-500">Lorem Ipsum</span> is simply dummy <br /> text of the printing.
          </h2><br></br>

          <p className="text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Homepage2;