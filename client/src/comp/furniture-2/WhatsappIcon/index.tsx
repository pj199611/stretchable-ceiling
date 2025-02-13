import Link from "next/link";
import WhatsApp from "@/images/icons/Whatsapp";
import "../style.css";

const FixedWhatsappIcon = () => (
  <>
    <Link
      href={"https://wa.me/8447041309"}
      target="_blank"
      rel="noreferrer noopenner"
      key={"whatsapp-Icon"}
    >
      <div className="animation-icon" style={{ bottom: 100, right: 0 }}>
        <WhatsApp
          style={{
            width: "2.25em",
            height: "2.25em",
            transition: "transform 0.3s ease" /* Smooth transition */,
          }}
        />
      </div>
    </Link>
  </>
);

export default FixedWhatsappIcon;
