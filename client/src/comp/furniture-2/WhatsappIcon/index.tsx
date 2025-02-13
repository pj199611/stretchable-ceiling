import Link from "next/link";
import WhatsApp from "@/images/icons/Whatsapp";

const FixedWhatsappIcon = () => (
  <>
    <Link
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
    </Link>
  </>
);

export default FixedWhatsappIcon;
