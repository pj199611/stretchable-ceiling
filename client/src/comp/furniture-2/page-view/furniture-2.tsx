import Section1 from "../section-1";
import Section2 from "../section-2";
import Section7 from "../section-7";
import Section9 from "../section-9";
import WhatsApp from "@/images/icons/Whatsapp";

export default function FurnitureTwoPageView() {
  return (
    <div className="bg-white pt-2">
      {/* TOP BANNER SECTION */}
      <Section1 />

      {/* BANNER GRID SECTION */}
      <Section2 />

      {/* SERVICES SECTION */}
      <Section9 />

      {/* TESTIMONIAL SECTION */}
      <Section7 />

      <a
        href={"https://wa.me/8447030606"}
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
