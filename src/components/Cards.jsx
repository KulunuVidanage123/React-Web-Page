import React from "react";
import bellImage from "../assets/bell.png";
import Pink from "../assets/pink.png";

function Cards() {
  return (
    <section id="cards-section" className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-5 md:px-15 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 justify-items-center lg:justify-items-start lg:ml-22">

        {/* Card 1 */}
        <div className="relative flex justify-center w-full max-w-[572px]">
          <div className="relative z-10 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md w-full flex flex-col justify-between text-center transition-all duration-300 hover:shadow-lg min-h-[459px]">

            <h3 className="text-[25px] sm:text-xl md:text-2xl font-semibold">
              Lorem Ipsum is simply <br className="hidden sm:block" />
              dummy text.
            </h3>
            
            <div className="flex-1 flex items-center">
              <p className="text-[16px] text-[#545454] sm:text-base leading-relaxed max-w-[90%] mx-auto text-center md:text-left">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                application and website builders measuring dozens of completed
                projects. We build and develop mobile applications for several top
                platforms, including Android & iOS.
              </p>
            </div>

            <button className="bg-[#1090CB] text-white w-[153px] h-[49px] rounded-lg font-medium hover:bg-[#0d7ab3] transition-all font-poppins mx-auto mt-4">
              View More
            </button>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="relative flex justify-center w-full max-w-[572px]">
          <img
            src={Pink}
            alt="Pink decorative background"
            className="absolute bottom-1/2 right-1/6 translate-x-1/2 translate-y-[90%] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] opacity-70 z-[1]"
          />

          {/* Card content */}
          <div className="relative z-10 bg-[#1090CB] text-white p-6 sm:p-8 rounded-xl shadow-md w-full flex flex-col justify-between text-center transition-all duration-300 hover:shadow-lg min-h-[459px]">
            
            <h3 className="text-[25px] sm:text-xl md:text-2xl font-semibold">
              Lorem Ipsum is simply <br className="hidden sm:block" />
              dummy text.
            </h3>

            <div className="flex-1 flex items-center">
              <p className="text-[16px] sm:text-base leading-relaxed max-w-[90%] mx-auto text-center md:text-left">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                application and website builders measuring dozens of completed
                projects. We build and develop mobile applications for several top
                platforms, including Android & iOS.
              </p>
            </div>

            <button 
              className="bg-white text-[#1090CB] w-[153px] h-[49px] rounded-lg font-medium hover:bg-gray-100 transition-all font-poppins mx-auto mt-4"
            >
              View More
            </button>

            {/* Bell image */}
            <img
              src={bellImage}
              alt="Bell notification icon"
              className="absolute top-[-4%] sm:top-[-10%] right-[5%] w-[50px] sm:w-[60px] md:w-[120px] h-auto z-20 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
