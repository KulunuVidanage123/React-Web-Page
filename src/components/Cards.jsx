import React from 'react';
import bellImage from '../assets/bell.png'; // 👈 Import the bell image

function Cards() {
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md min-h-[450px] flex flex-col justify-center max-w-[550px] mx-auto font-poppins">
          <h3 className="text-xl font-bold mb-4 text-center font-poppins">
            Lorem Ipsum is simply <br />
            dummy text.
          </h3>
          <p className="text-gray-600 mb-6 text-center font-poppins">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-5 py-2 rounded font-medium hover:bg-blue-600 font-poppins">
              View More
            </button>
          </div>
        </div>

        {/* Card 2 — wrapped in relative container for background circle + bell */}
        <div className="relative max-w-[550px] mx-auto">
          {/* Gradient light pink circle in bottom-right */}
          <div
            className="absolute bottom-1/2 right-16 transform translate-y-[90%] translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #fce7f3, #fbcfe8, #f12d99ff)', // light pink gradient
              zIndex: 1,
            }}
          ></div>

          {/* Actual card content on top */}
          <div className="relative z-10 bg-blue-500 text-white p-8 rounded-lg shadow-md min-h-[450px] flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4 text-center font-poppins">
              Lorem Ipsum is simply <br />
              dummy text.
            </h3>
            <p className="mb-6 text-center font-poppins">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-blue-500 px-5 py-2 rounded font-medium hover:bg-gray-100 font-poppins">
                View More
              </button>
            </div>
          </div>

          {/* Bell Image — positioned at top-right corner of card, floating above */}
          
          <img
            src={bellImage}
            alt="Bell notification icon"
            className="absolute top-[-15%] right-0 w-18 h-18 -translate-y-2 translate-x-2 z-20 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
          />

        </div>
      </div>
    </section>
  );
}

export default Cards;