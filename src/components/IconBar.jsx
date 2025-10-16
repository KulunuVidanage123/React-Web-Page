import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

function IconBar() {
  const services = [
    { img: icon1, title: 'Web Application', desc: 'Lorem Ipsum is simply' },
    { img: icon2, title: 'SEO', desc: 'Lorem Ipsum is simply' },
    { img: icon3, title: 'AR/VR Solutions', desc: 'Lorem Ipsum is simply' },
    { img: icon4, title: 'Mobile Applications', desc: 'Lorem Ipsum is simply' },
  ];

  return (
    
    <section id="iconbar-section" className="py-6 sm:py-8 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 bg-white w-full hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-contain"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 font-poppins text-sm sm:text-base truncate">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-poppins">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IconBar;
