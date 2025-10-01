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
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 👇 Increased gap from gap-6 to gap-8 */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white w-full"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h3 className="font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IconBar;