import React from "react";

const ServiceIcon = ({ src, alt, bgColor }) => {
  return (
    <div
      className="flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        backgroundColor: bgColor,
        width: "83px",
        height: "83px",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-contain"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
    </div>
  );
};

export default ServiceIcon;
