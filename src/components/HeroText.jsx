// src/components/HeroText.jsx
import React from 'react';

function HeroText() {
  return (
    <section className="py-8 md:py-8 mt-12">
      <section id="herotext-section" className="..."></section>
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h1 className="text-[33px] font-semibold text-[#252525] leading-relaxed font-poppins">
          Lorem Ipsum is simply dummy text of the printing.<br />
        </h1>

        <p className="mt-8 text-[18px] text-[#868686] font-poppins">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
          Lorem Ipsum has been the industry's
        </p>
      </div>
    </section>
  );
}

export default HeroText;
