import React from 'react';
import smartphoneImage from '../assets/smartphone.png';
import stacksImage from '../assets/stacks.png';
import vrImage from '../assets/VRHeadset.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import happy1 from "../assets/happy1.png";
import CircleImage from "../components/CircleImage";

function Homepage() {
  const contentBlock1 = {
    img: icon5,
    title: (
      <span className="text-[17px] font-mildbold text-gray-900 whitespace-nowrap overflow-ellipsis">
        {'Lorem Ipsum is simply dummy text'}
      </span>
    ),
    desc: (
      <span className="text-[14px] text-[#868686]">
        {'Lorem Ipsum is simply dummy text'}
      </span>
    ),
  };

  const contentBlock2 = {
    img: icon6,
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

  const contentBlock3 = {
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
    <>
      {/* Homepage Section 1 */}
      <section
        id="homepage-section"
        className="py-8 sm:py-12 md:py-16 pt-0 sm:pt-0 md:pt-16 bg-white overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-5 md:px-15 flex flex-col items-center lg:items-center xl:flex-row xl:items-start gap-8 md:gap-12">
    
          {/* Smartphone Image */}
          <div className="flex-shrink-0 w-full xl:w-auto flex justify-center mb-6 xl:mb-0 order-first xl:order-last">
            <img
              src={smartphoneImage}
              alt="Smartphone mockup"
              className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
            />
          </div>

          <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-6 md:space-y-8 text-center xl:text-left flex flex-col items-center xl:items-start xl:mt-32 lg:ml-8">

            {/* Circle + Text Section */}
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 mb-4 ml-16 sm:ml-0">
              <CircleImage
                src={happy1}
                alt="Happy"
                bgColor="#08D3BB"
                size={58}        
                imgSize={26}      
                className="sm:relative absolute -left-16 -top-2 sm:top-auto sm:left-auto"
              />

              <div className="ml-0 sm:ml-0 mt-2 sm:mt-0 text-center sm:text-left">
                <h3 className="font-medium text-gray-900 font-poppins text-sm sm:text-base">
                  {contentBlock1.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                  {contentBlock1.desc}
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-2xl font-semibold text-gray-900 font-poppins">
              <span className="text-[#1090CB] font-poppins">Lorem Ipsum</span> is simply dummy <br className="hidden md:block" /> text of the printing.
            </h2>

            {/* Description */}
            <p className="text-[16px] text-[#545454] sm:text-base font-poppins">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
            </p>
          </div>

        </div>
      </section>

      {/* Homepage Section 2 */}
      <section id="homepage2-section" className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 md:px-15 flex flex-col xl:flex-row items-center xl:items-start justify-between lg:justify-center gap-8 md:gap-12 relative">

          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center xl:items-start justify-center gap-6 md:gap-10 w-full">
            
            {/* Image Section */}
            <div className="flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-start mb-4 xl:mb-0 order-first relative">
              <img
                src={stacksImage}
                alt="Stacks mockup"
                className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
              />
            </div>

            <div className="flex-1 w-full max-w-full md:max-w-2xl flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 md:space-y-8 xl:mt-16">
              
              {/* Circle + Text Section */}
              <div className="relative flex flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-3 mb-2 sm:mb-3 md:mb-4 -ml-2 sm:ml-0">
                
                <div className="flex ml-2 sm:ml-0">
                  <CircleImage
                    src={happy1}
                    alt="Happy"
                    bgColor="#1090CB"
                    size={58}
                    imgSize={26}
                  />
                </div>

                <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
                  <h3 className="font-medium text-gray-900 font-poppins text-sm sm:text-base">
                    {contentBlock2.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                    {contentBlock2.desc}
                  </p>
                </div>

              </div>

              {/* Heading */}
              <h2 className="text-[30px] sm:text-2xl font-semibold text-gray-900 font-poppins">
                <span className="text-[#1090CB] font-poppins">Lorem Ipsum</span> is simply dummy <br className="hidden md:block" /> text of the printing.
              </h2>

              {/* Description */}
              <p className="text-[16px] text-[#545454] font-poppins">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Homepage Section 3 */}
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
                  {contentBlock3.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                  {contentBlock3.desc}
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
    </>
  );
}

export default Homepage;