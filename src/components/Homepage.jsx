import React from 'react';
import happy1 from '../assets/happy1.png';
import smartphoneImage from '../assets/smartphone.png';
import stacksImage from '../assets/stacks.png';
import vrImage from '../assets/VRHeadset.png';
import CircleImage, { sectionInfo, titleBase, descBase } from "../components/CircleImage";
import SectionText from "../components/SectionText";

const Homepage = () => {
  const images = [smartphoneImage, stacksImage, vrImage];
  const titleClasses = [(`${titleBase} overflow-ellipsis`), (`${titleBase} text-center`)];
  const imagePositions = ["right", "left", "right"];

  const homepageSections = sectionInfo.map((info, index) => ({
    ...info,
    circleImage: happy1,
    sectionText: <SectionText />,
    image: images[index],
    titleClass: titleClasses[index % titleClasses.length],
    descClass: descBase,
    titleText: "Lorem Ipsum is simply dummy text",
    descText: "Lorem Ipsum is simply dummy text",
    imagePosition: imagePositions[index]
  }));

  return (
    <>
      {homepageSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-8 sm:py-12 md:py-16 ${index === 0 ? "pt-0 sm:pt-0 md:pt-16" : ""} bg-white overflow-hidden`}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-12 md:px-15 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 md:gap-12 relative">
            
            {/* Image */}
            <div className={`flex-shrink-0 w-full xl:w-auto flex justify-center mb-6 xl:mb-0 order-first relative ${section.imagePosition === "left" ? "xl:justify-start" : "xl:justify-end"} ${section.imagePosition === "right" ? "xl:order-last" : ""}`}>
              <img
                src={section.image}
                alt={`${section.id}-mockup`}
                className="w-full max-w-[350px] sm:max-w-[650px] md:w-[700px] h-auto md:h-[500px] rounded-xl object-contain"
              />
            </div>

            <div className={`flex-1 w-full max-w-full md:max-w-2xl flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 md:space-y-8 px-4 sm:px-0 ${section.marginTop}`}>
              
              {/* Circle + Title + Desc */}
              <div className="relative flex flex-row items-center gap-3 sm:gap-4 mb-4 px-4 sm:px-0 text-center sm:text-left">
                <CircleImage index={index} bgColor={section.bgColor} />
                <div className="flex flex-col items-start justify-center text-left">
                  <h3 className="font-medium text-gray-900 font-poppins text-sm sm:text-base">
                    <span className={section.titleClass}>{section.titleText}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                    <span className={section.descClass}>{section.descText}</span>
                  </p>
                </div>
              </div>
              
              {section.sectionText}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Homepage;