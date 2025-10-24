import React from "react";
import happy1 from "../assets/happy1.png";

const CircleImage = ({
  index,
  bgColor = "#08D3BB",
  size = 58,
  imgSize = 26,
}) => {
  const className =
    index === 0
      ? "sm:relative absolute -left-16 -top-2 sm:top-auto sm:left-auto"
      : "";

  return (
    <div
      className={`rounded-full flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundColor: bgColor,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img
        src={happy1}
        alt="Happy"
        className="object-contain"
        style={{
          width: `${imgSize}px`,
          height: `${imgSize}px`,
        }}
      />
    </div>
  );
};

export default CircleImage;