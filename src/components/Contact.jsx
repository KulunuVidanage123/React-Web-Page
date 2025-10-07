import React from 'react';
import starImage from '../assets/star.png';
import pieImage from '../assets/PChart.png';

function Contact() {
  return (
    <section className="min-h-[400px] bg-blue-50 relative flex items-center">
      {/* Star Image — top-left, floating */}
      <img
        src={starImage}
        alt="Star icon"
        className="absolute top-[-10%] left-1/4 w-18 h-18 -translate-x-1/2 -translate-y-2 z-20 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
        
      />

      <img
        src={pieImage}
        alt="Pie icon"
        className="absolute top-[20%] right-1/3 w-18 h-18 -translate-x-1/2 -translate-y-2 z-20 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
        
      />


      {/* Reduced width: max-w-4xl (896px) or max-w-5xl (1024px) */}
      <div className="max-w-4xl mx-auto px-4 text-center w-full">
        <h3 className="text-xl font-bold mb-4 font-poppins">
          Lorem Ipsum is simply dummy <br />
          text of the printing.
        </h3><br></br>
        <form className="flex flex-col sm:flex-row gap-3 mt-8 justify-center items-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto max-w-[800px] px-40 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-left"
          />
          <button
            type="submit"
            className="bg-black text-white px-9 py-4 rounded-md hover:bg-gray-800 whitespace-nowrap font-poppins text-sm"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;