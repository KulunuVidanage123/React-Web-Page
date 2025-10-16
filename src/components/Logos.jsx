import React from 'react';
import beneoshop from '../assets/beneoshop.png';
import caspio from '../assets/caspio.png';
import hypergrid from '../assets/HyperGrid.png';
import leotrippi from '../assets/leotrippi.png';
import yellowicon from '../assets/yellowicon.png'; 

function Logos() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
      
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] z-0 opacity-30"
      >
        <img 
          src={yellowicon} 
          alt="Yellow decorative icon" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-base sm:text-lg font-medium mb-6 sm:mb-8 font-poppins">
          You will be in good company
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center">
          <img 
            src={beneoshop} 
            alt="Beneoshop" 
            className="w-[120px] sm:w-[150px] md:w-auto max-h-[150px] object-contain"
          />
          <img 
            src={caspio} 
            alt="Caspio" 
            className="w-[120px] sm:w-[150px] md:w-auto max-h-[150px] object-contain"
          />
          <img 
            src={hypergrid} 
            alt="HyperGrid" 
            className="w-[120px] sm:w-[150px] md:w-auto max-h-[150px] object-contain"
          />
          <img 
            src={leotrippi} 
            alt="Leo Trippi" 
            className="w-[120px] sm:w-[150px] md:w-auto max-h-[150px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Logos;