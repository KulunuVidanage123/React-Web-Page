import React from 'react';
import ServiceIcon from './ServiceIcon';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

function IconBar() {
  const services = [
    { img: icon1, title: 'Web Application', desc: 'Lorem Ipsum is simply', color: '#EFEAFF' },
    { img: icon2, title: 'SEO', desc: 'Lorem Ipsum is simply', color: '#ECFFDA' },
    { img: icon3, title: 'AR/VR Solutions', desc: 'Lorem Ipsum is simply', color: '#DAE6FF' },
    { img: icon4, title: 'Mobile Applications', desc: 'Lorem Ipsum is simply', color: '#FFE5DA' },
  ];

  return (
    <section id="iconbar-section" className="py-4 sm:py-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-3 bg-white w-full hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              {/* Icon */}
              <ServiceIcon src={service.img} alt={service.title} bgColor={service.color} />

              {/* Text */}
              <div className="flex-1 min-w-0 -mt-1 sm:mt-3">
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
