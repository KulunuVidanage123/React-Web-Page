import React from 'react';
import smartphoneImage from '../assets/smartphone.png';
import stacksImage from '../assets/stacks.png';
import vrImage from '../assets/VRHeadset.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import CircleImage from "../components/CircleImage";

function Homepage() {
  const icons = [icon5, icon6, icon7];

  const contentBlocks = icons.map((img, index) => {
    const titleClass = index === 0 ? "text-[17px] font-mildbold text-gray-900 whitespace-nowrap overflow-ellipsis" : "text-[17px] font-mildbold text-gray-900 whitespace-nowrap text-center";

    const descClass = "text-[14px] text-[#868686]";

    return {
      img,
      title: (
        <span className={titleClass}>
          {'Lorem Ipsum is simply dummy text'}
        </span>
      ),
      desc: (
        <span className={descClass}>
          {'Lorem Ipsum is simply dummy text'}
        </span>
      ),
    };
  });

  const sectionInfo = [
    { id: "homepage-section", image: smartphoneImage, imagePosition: "right", bgColor: "#08D3BB", marginTop: "xl:mt-32 lg:ml-8" },
    { id: "homepage2-section", image: stacksImage, imagePosition: "left", bgColor: "#1090CB", marginTop: "xl:mt-16" },
    { id: "homepage3-section", image: vrImage, imagePosition: "right", bgColor: "#9208D3", marginTop: "xl:mt-32" },
  ];

  const sections = sectionInfo.map((info, index) => ({ ...info, content: contentBlocks[index], }));

  const renderCircleSection = (section, index) => (
    <div
      className={`relative flex ${ index === 0 ? "flex-col sm:flex-row ml-16 sm:ml-0" : "flex-row -ml-2 sm:ml-0" } items-center sm:items-start text-center sm:text-left gap-3 mb-4`}
    >
      <CircleImage index={index} bgColor={section.bgColor} />

      <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
        <h3 className="font-medium text-gray-900 font-poppins text-sm sm:text-base">
          {section.content.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-poppins">
          {section.content.desc}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-8 sm:py-12 md:py-16 ${ index === 0 ? "pt-0 sm:pt-0 md:pt-16" : "" } bg-white overflow-hidden`}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-12 md:px-15 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 md:gap-12 relative">
            
            {section.imagePosition === "left" && (
              <div className="flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-start mb-6 xl:mb-0 order-first relative">
                <img
                  src={section.image}
                  alt={`${section.id}-mockup`}
                  className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
                />
              </div>
            )}

            <div
              className={`flex-1 w-full max-w-full md:max-w-2xl flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 md:space-y-8 ${section.marginTop}`}
            >
              {renderCircleSection(section, index)}

              <h2 className="text-[30px] sm:text-2xl font-semibold text-gray-900 font-poppins">
                <span className="text-[#1090CB] font-poppins">Lorem Ipsum </span> is simply dummy{" "}
                <br className="hidden md:block" /> text of the printing.
              </h2>

              <p className="text-[16px] text-[#545454] font-poppins">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
              </p>
            </div>

            {section.imagePosition === "right" && (
              <div className="flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-end mb-6 xl:mb-0 order-first xl:order-last relative">
                <img
                  src={section.image}
                  alt={`${section.id}-mockup`}
                  className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
                />
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export default Homepage;