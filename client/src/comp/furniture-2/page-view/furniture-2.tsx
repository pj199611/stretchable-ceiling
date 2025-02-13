import Section1 from "../section-1";
import Section2 from "../section-2";
import Section7 from "../section-7";
import Section9 from "../section-9";
import CallMeBackModal from "../CallMeBack";
import FixedWhatsappIcon from "../WhatsappIcon";
import VideoSection from "../VideoSection";
import IconsDisplay from "../IconsDisplay";
import WhatWeOffer from "../WhatWeOffer";

export default function FurnitureTwoPageView() {
  return (
    <div className="bg-white pt-2">
      {/* Icons Display */}
      <IconsDisplay />

      {/* TOP BANNER SECTION */}
      <Section1 />

      {/* BANNER GRID SECTION */}
      <Section2 />

      {/* <div className="bg-white pt-2"></div> */}

      {/* SERVICES SECTION */}
      <Section9 />

      {/* <VideoSection /> */}
      <VideoSection />

      <WhatWeOffer />

      {/* TESTIMONIAL SECTION */}
      <Section7 />

      {/* Fixed Icons */}
      <CallMeBackModal />
      <FixedWhatsappIcon />
    </div>
  );
}
