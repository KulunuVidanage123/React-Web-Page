import React from 'react';
import starImage from '../assets/star.png';
import pieImage from '../assets/PChart.png';

function Contact() {
  return (
    <section className="min-h-[500px] max-w- [1440px] bg-[#E8F4FA] relative flex items-center overflow-hidden px-4 py-12">
      {/* Decorative Images */}
      <img
        src={starImage}
        alt="Star icon"
        className="absolute top-0 left-[30%] w-10 sm:w-14 md:w-20 animate-bounce hover:scale-110 transition-transform duration-300"
      />

      <img
        src={pieImage}
        alt="Pie icon"
        className="absolute top-[25%] right-[35%] w-5 sm:w-5 md:w-10 animate-bounce hover:scale-110 transition-transform duration-300"
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 font-poppins leading-relaxed text-gray-800">
          Lorem Ipsum is simply dummy <br className="hidden sm:block" />
          text of the printing.
        </h3><br></br>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center px-2">
          <input
            type="email"
            placeholder="        Enter your email"
            className="w-full sm:flex-1 w-[532px] h-[67px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base font-poppins placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-black text-white w-[173px] h-[67px] rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base font-poppins"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
