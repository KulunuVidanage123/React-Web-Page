import React from 'react';
import beneoshop from '../assets/beneoshop.png';
import caspio from '../assets/caspio.png';
import hypergrid from '../assets/HyperGrid.png';
import leotrippi from '../assets/leotrippi.png';

function Logos() {
  return (
    <section className="py-16 bg-white relative"> {/* ✅ Add 'relative' */}
      {/* Yellow Half-Circle Gradient — Center-Left Corner */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full z-0 opacity-30"
        style={{
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)', // Right half visible → faces right
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-medium mb-8 font-poppins">You will be in good company</h3>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          <img src={beneoshop} alt="Beneoshop" className="h-100" />
          <img src={caspio} alt="Caspio" className="h-100" />
          <img src={hypergrid} alt="HyperGrid" className="h-100" />
          <img src={leotrippi} alt="Leo Trippi" className="h-100" />
        </div>
      </div>
    </section>
  );
}

export default Logos;