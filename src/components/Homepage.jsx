import React from 'react';
import smartphoneImage from '../assets/smartphone.png';
import stacksImage from '../assets/stacks.png';
import vrImage from '../assets/VRHeadset.png';
import happy1 from '../assets/happy1.png';
import CircleImage, { sectionInfo } from "../components/CircleImage";
import SectionText from "../components/SectionText"; 

function Homepage() {
  const icons = [happy1, happy1, happy1];

  const contentBlocks = icons.map((img, index) => {
    const titleBase = "text-[17px] font-mildbold text-gray-900 whitespace-nowrap";
    const titleClass = index === 0 ? `${titleBase} overflow-ellipsis` : `${titleBase} text-center`;
    const descClass = "text-[14px] text-[#868686]";

    return {
      img,
      title: (
        <span className={titleClass}>
          {"Lorem Ipsum is simply dummy text"}
        </span>
      ),
      desc: (
        <span className={descClass}>
          {"Lorem Ipsum is simply dummy text"}
        </span>
      ),
    };
  });

  const sections = sectionInfo.map((info, index) => ({
    ...info,
    content: contentBlocks[index],
  }));

  const renderCircleSection = (section, index) => (
    <div
      className={`relative flex flex-row items-center gap-3 sm:gap-4 mb-4 px-4 sm:px-0 text-center sm:text-left`}
    >
      <CircleImage index={index} bgColor={section.bgColor} />

      <div className="flex flex-col items-start justify-center text-left">
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
              className={`flex-1 w-full max-w-full md:max-w-2xl flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 md:space-y-8 px-4 sm:px-0 ${section.marginTop}`}
            >
              {renderCircleSection(section, index)}
              <SectionText />
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