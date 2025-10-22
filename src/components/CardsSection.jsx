import React from 'react';

function Card({
  variant = 'default',
  pinkImageSrc,
  bellImageSrc,
  title,
  description,
  onButtonClick,
}) {
  const isPink = variant === 'pink';

  return (
    <div className="relative flex justify-center w-full max-w-[572px]">
      {isPink && (
        <img
          src={pinkImageSrc}
          alt="Pink decorative background"
          className="absolute bottom-1/2 right-1/6 translate-x-1/2 translate-y-[90%] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] opacity-70 z-[1]"
        />
      )}

      {/* Card content */}
      <div
        className={`relative z-10 ${
          isPink ? 'bg-[#1090CB] text-white' : 'bg-gray-50 text-gray-900'
        } 
        p-6 sm:p-8 rounded-xl shadow-md w-full flex flex-col justify-between 
        text-center transition-all duration-300 hover:shadow-lg min-h-[459px]
        lg:items-center lg:text-center lg:pb-10`}
      >
        <h3 className="text-[25px] sm:text-xl md:text-2xl font-semibold lg:mt-4">
          {title}
        </h3>

        <div className="flex-1 flex items-center lg:justify-center">
          <p
            className={`text-[16px] sm:text-base leading-relaxed max-w-[90%] mx-auto 
            ${isPink ? 'text-white' : 'text-[#545454]'} 
            text-center md:text-left lg:text-center`}
          >
            {description}
          </p>
        </div>

        <button
          onClick={onButtonClick}
          className={`w-[153px] h-[49px] rounded-lg font-medium 
          hover:${isPink ? 'bg-gray-100' : 'bg-[#0d7ab3]'} 
          transition-all font-poppins mx-auto 
          mt-4 lg:mt-0
          ${isPink ? 'bg-white text-[#1090CB]' : 'bg-[#1090CB] text-white'}`}
          
        >
          View More
        </button>

        {isPink && (
          <img
            src={bellImageSrc}
            alt="Bell notification icon"
            className="absolute top-[-4%] sm:top-[-10%] right-[5%] w-[50px] sm:w-[60px] md:w-[120px] h-auto z-20 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
