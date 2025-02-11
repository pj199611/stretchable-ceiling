import Section1 from "../section-1";
import Section2 from "../section-2";
import Section7 from "../section-7";
import Section9 from "../section-9";
import WhatsApp from "@/images/icons/Whatsapp";
import CallMeBackModal from "@/comp/CallMeBack";
import { FlexRowCenter } from "@/components/flex-box";
import VideoSection from "../VideoSection";

export default function FurnitureTwoPageView() {
  return (
    <div className="bg-white pt-2">
      {/* TOP BANNER SECTION */}
      <Section1 />

      {/* BANNER GRID SECTION */}
      <Section2 />

      {/* <div className="bg-white pt-2"></div> */}

      {/* SERVICES SECTION */}
      <Section9 />

      {/* <VideoSection /> */}
      <VideoSection />

      {/* TESTIMONIAL SECTION */}
      <Section7 />

      <CallMeBackModal />

      <a
        href={"https://wa.me/8447041309"}
        target="_blank"
        rel="noreferrer noopenner"
        key={"whatsapp-Icon"}
      >
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 0,
            zIndex: 5,
            margin: "1em",
          }}
        >
          <WhatsApp style={{ width: "2.25em", height: "2.25em" }} />
        </div>
      </a>
    </div>
  );
}
