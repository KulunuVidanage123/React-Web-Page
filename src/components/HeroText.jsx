// src/components/HeroText.jsx
import React from 'react';

function HeroText() {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed font-poppins">
          Lorem Ipsum is simply dummy text of the printing.<br />
        </h1>
        <p className="mt-4 text-gray-600 font-poppins">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry <br></br>
                Lorem Ipsum has been the industry's
        </p>
      </div>
    </section>
  );
}

export default HeroText;