import React from "react";

const CircleImage = ({
  src,
  alt,
  bgColor = "#08D3BB",
  size = 58,
  imgSize = 26,
  className = "", 
}) => {
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
        src={src}
        alt={alt}
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
