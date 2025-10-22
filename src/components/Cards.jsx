import React from "react";
import bellImage from "../assets/bell.png";
import Pink from "../assets/pink.png";
import Card from "./CardsSection";

function Cards() {
  const commonTitle = (
    <>
      Lorem Ipsum is simply <br className="hidden sm:block" />
      dummy text.
    </>
  );

  const commonDescription =
    "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web application and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS.";

  return (
    <section id="cards-section" className="py-16 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-5 md:px-15 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 justify-items-center lg:justify-items-start lg:ml-22">
        {/* Card 1 */}
        <Card
          variant="default"
          title={commonTitle}
          description={commonDescription}
        />

        {/* Card 2 */}
        <Card
          variant="pink"
          pinkImageSrc={Pink}
          bellImageSrc={bellImage}
          title={commonTitle}
          description={commonDescription}
        />
      </div>
    </section>
  );
}

export default Cards;
