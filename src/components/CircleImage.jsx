import React from "react";
import happy1 from "../assets/happy1.png";
import smartphoneImage from "../assets/smartphone.png";
import stacksImage from "../assets/stacks.png";
import vrImage from "../assets/VRHeadset.png";

export const titleBase = "text-[17px] font-mildbold text-gray-900 whitespace-nowrap";
export const descBase = "text-[14px] text-[#868686]";

export const sectionInfo = [
  {
    id: "homepage-section",
    image: smartphoneImage,
    imagePosition: "right",
    bgColor: "#08D3BB",
    marginTop: "xl:mt-32 lg:ml-8",
  },
  {
    id: "homepage2-section",
    image: stacksImage,
    imagePosition: "left",
    bgColor: "#1090CB",
    marginTop: "xl:mt-16",
  },
  {
    id: "homepage3-section",
    image: vrImage,
    imagePosition: "right",
    bgColor: "#9208D3",
    marginTop: "xl:mt-32",
  },
];

const CircleImage = ({ index, size = 58, imgSize = 26 }) => {
  const images = [happy1, happy1, happy1];
  const bgColors = ["#08D3BB", "#1090CB", "#9208D3"];
  const bgColor = bgColors[index] || "#08D3BB";

  const positions = [
    { mobile: "relative", desktop: "relative sm:static" },
    { mobile: "relative", desktop: "relative sm:static" },
    { mobile: "relative", desktop: "relative sm:static" },
  ];

  const positionClasses = positions[index]
    ? `${positions[index].mobile} sm:${positions[index].desktop}`
    : "relative sm:static";

  const baseClass =
    "rounded-full flex items-center justify-center overflow-hidden z-10";
  const className = `${baseClass} ${positionClasses}`;

  return (
    <div
      className={className}
      style={{
        backgroundColor: bgColor,
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
      }}
    >
      <img
        src={images[index] || happy1}
        alt={`circle-${index}`}
        className="object-contain sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
        style={{
          width: `${imgSize}px`,
          height: `${imgSize}px`,
        }}
      />
    </div>
  );
};

export default CircleImage;
