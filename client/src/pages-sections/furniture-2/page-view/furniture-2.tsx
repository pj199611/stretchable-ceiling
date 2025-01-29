// GLOBAL CUSTOM COMPONENTS
import Setting from "@/components/settings";
// LOCAL CUSTOM SECTION COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9";
import WhatsApp from "@/images/icons/Whatsapp";

export default function FurnitureTwoPageView() {
  return (
    <div className="bg-white pt-2">
      {/* TOP BANNER SECTION */}
      <Section1 />

      {/* BANNER GRID SECTION */}
      <Section2 />

      {/* NEW ARRIVALS PRODUCTS SECTION */}
      {/* <Section3 /> */}

      {/* BED ROOM & DINNING DEAL SECTION */}
      {/* <Section4 /> */}

      {/* TRENDING PRODUCTS SECTION */}
      {/* <Section5 /> */}

      {/* GRID BANNERS SECTION */}
      {/* <Section6 /> */}

      {/* SERVICES SECTION */}
      <Section9 />

      {/* TESTIMONIAL SECTION */}
      <Section7 />
      {/* NEWSLETTER BANNER SECTION */}
      {/* <Section8 /> */}
      {/*  */}

      <a
        href={"https://wa.me/8447030606"}
        target="_blank"
        rel="noreferrer noopenner"
        key={"whatsapp-Icon"}
      >
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 5,
            // borderRadius: 50,
            // backgroundColor: "#00d7186b",
            // padding: "0.5em 0.6em",
            margin: "1em",
          }}
        >
          <WhatsApp style={{ width: "2.25em", height: "2.25em" }} />
        </div>
      </a>
    </div>
  );
}
