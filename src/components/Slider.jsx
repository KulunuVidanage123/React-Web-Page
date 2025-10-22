import React from 'react';
import developerImg from '../assets/developer.png';
import figure1 from '../assets/figure1.png';
import figure2 from '../assets/figure2.png';
import yellowCircle from '../assets/yellowCircle.png';

function Slider() {
  return (
    <section
      id="slider-section"
      className="min-h-[84vh] bg-gradient-to-br from-[#1090CB1A] to-white py-16 border-b border-gray-200 relative font-poppins"
    >
      <div className="max-w-[1600px] mx-auto w-full px-6 flex flex-col md:flex-col lg:flex-row items-center justify-between gap-8 min-h-[84vh]">
        
        {/* Left: Text Content */}
        <div
          className="flex-1 w-full max-w-none text-center lg:text-left px-4 md:px-4 lg:pl-32 lg:pr-0 
                    order-last md:order-last lg:order-1 
                    mt-12 md:mt-12 lg:mt-0
                    xl:mt-0"
        >
          <h1 className="text-[40px] md:text-[40px] font-semibold text-gray-900 mb-10 font-poppins leading-[1.4]">
            Experienced <span className="text-[#1090CB]">mobile and web</span>{' '}
            applications and website <br /> builders measuring.
          </h1>

          <p className="text-[16px] text-[#5C5C5C] mb-8 font-poppins">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web <br></br>
            applications and website builders measuring dozens of completed
            projects. <br></br> We build and develop mobile applications for several top
            platforms, <br></br> including Android & iOS.
          </p>
          <br />

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center lg:items-start">
            <button className="bg-[#1090CB] text-white w-[193px] h-[53px] rounded-lg font-medium hover:bg-[#0d7fb5] transition-colors font-poppins">
              Contact us
            </button>
            <button className="border border-[#1090CB] text-[#1090CB] w-[193px] h-[53px] rounded-lg font-medium hover:bg-blue-50 transition-colors font-poppins">
              View more
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex-shrink-0 relative order-1 lg:order-2 flex justify-end w-full md:w-auto -mt-28">
          <div className="relative">
            
            <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FFF9C4]/60 to-transparent blur-2xl z-[8]" />
              
            <img
              src={developerImg}
              alt="Developer working"
              className="w-[763px] h-[597px] rounded-xl object-contain relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Decorative Figure 1 */}
      <div className="absolute top-[200px] right-0 z-10 hidden xl:block">
        <img
          src={figure1}
          alt="Decorative figure"
          className="w-18 h-18 object-contain"
        />
      </div>

      {/* Decorative Figure 2 */}
      <div className="absolute left-0 z-10 hidden xl:block top-[550px] lg:top-[800px] xl:top-[520px] 2xl:top-[85%]">
        <img
          src={figure2}
          alt="Decorative figure"
          className="object-contain"
        />
      </div>

    </section>
  );
}

export default Slider;
