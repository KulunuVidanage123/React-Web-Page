import React from "react";
import bellImage from "../assets/bell.png";
import Pink from "../assets/pink.png";

function Cards() {
  return (
    <section id="cards-section" className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12">
        {/* Card 1 */}
        <div className="relative flex justify-center">
          <div className="relative z-10 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md w-[572px] h-[459px] flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              Lorem Ipsum is simply <br className="hidden sm:block" />
              dummy text.
            </h3><br></br>
            <p className="text-gray-600 mb-10 text-sm sm:text-base leading-relaxed max-w-[90%] mx-auto">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              application and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p><br></br>
            <button className="bg-[#1090CB] text-white w-[153px] h-[49px] rounded-lg font-medium hover:bg-[#0d7ab3] transition-all font-poppins">
              View More
            </button>
          </div>
        </div>

        {/* Card 2 — with Pink background and bell image */}
        <div className="relative flex justify-center">
          <img
            src={Pink}
            alt="Pink decorative background"
            className="absolute bottom-1/2 right-1/6 translate-x-1/2 translate-y-[90%] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] opacity-70 z-[1]"
          />

          {/* Card content */}
          <div className="relative z-10 bg-[#1090CB] text-white p-6 sm:p-8 rounded-xl shadow-md w-[572px] h-[459px] flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              Lorem Ipsum is simply <br className="hidden sm:block" />
              dummy text.
            </h3><br></br>
            <p className="mb-10 text-sm sm:text-base leading-relaxed max-w-[90%] mx-auto">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              application and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & iOS.
            </p><br></br>
            <button 
              className="bg-white text-[#1090CB] w-[153px] h-[49px] rounded-lg font-medium hover:bg-gray-100 transition-all font-poppins"
            >
              View More
            </button>
          </div>

          {/* Bell image — floating and responsive */}
          <img
            src={bellImage}
            alt="Bell notification icon"
            className="absolute top-[-10%] right-[5%] w-[50px] sm:w-[60px] md:w-[120px] h-auto z-20 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;
