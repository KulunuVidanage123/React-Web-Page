import React from 'react';
import vrImage from '../assets/VRHeadset.png';
import icon7 from '../assets/icon7.png';
import happy1 from "../assets/happy1.png";
import CircleImage from "../components/CircleImage"; 

function Homepage3() {
  const contentBlock = {
  img: icon7,
  title: (
    <span className="text-[17px] font-mildbold text-gray-900 whitespace-nowrap text-center">
      {'Lorem Ipsum is simply dummy text'}
    </span>
  ),
  desc: (
    <span className="text-[14px] text-[#868686]">
      {'Lorem Ipsum is simply dummy text'}
    </span>
  ),
};


  return (
    <section id="homepage3-section" className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-12 md:px-15 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 md:gap-12 relative">

        <div className="flex-1 w-full max-w-full md:max-w-2xl flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 md:space-y-8 xl:mt-32">

          {/* Circle + Text Section */}
          <div className="relative flex flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
            <div className="flex">
              <CircleImage
                src={happy1}
                alt="Happy"
                bgColor="#9208D3"
                size={58}
                imgSize={26}
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-medium text-gray-900 font-poppins text-sm sm:text-base">
                {contentBlock.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                {contentBlock.desc}
              </p>
            </div>
          </div>

          <h2 className="text-[30px] sm:text-2xl font-semibold text-gray-900 font-poppins">
            <span className="text-[#1090CB] font-poppins">Lorem Ipsum</span> is simply dummy <br className="hidden md:block" /> text of the printing.
          </h2>

          <p className="text-[16px] text-[#545454] font-poppins">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
          </p>
        </div>

        {/* VR Image */}
        <div className="flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-end mb-6 xl:mb-0 order-first xl:order-last relative">
          <img
            src={vrImage}
            alt="VR Headset mockup"
            className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default Homepage3;
