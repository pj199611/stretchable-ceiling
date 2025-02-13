import { FlexBox } from "@/components/flex-box";
import { H6 } from "@/components/Typography";

// ==============================================================
type subService = {
  title: string;
  description: string;
};
interface Service {
  heading: string;
  description: subService[];
  id: number;
  avatar: string;
}
type Props = { service: Service };
// ==============================================================

export default function ServiceCard({ service }: Props) {
  const { heading, description, id, avatar } = service || {};

  return (
    <div
      key={`serviceCard-${id}`}
      style={{
        backgroundColor: "#F3F5F9",
        minHeight: 200,
        padding: "8px 16px 8px 16px",
        borderRadius: "5%",
      }}
    >
      <FlexBox mb={2} gap={2}>
        <div
          style={{
            width: 30,
            height: 50,
            fontSize: 30,
          }}
        >
          {avatar}
        </div>

        <div style={{ alignContent: "center" }}>
          <H6 fontSize={24}>{heading}</H6>
        </div>
      </FlexBox>

      <div
        style={{
          minHeight: 200, // Set a minimum height
          height: 200, // Same height for all boxes
          flex: 1, // Ensures all boxes grow and fill available space equally
          overflowY: "auto",
          scrollbarWidth: "thin", // Firefox custom scrollbar width (thin)
          scrollbarColor: "#888 #eff2f5", // Firefox custom scrollbar color (thumb & track)
        }}
      >
        {description?.map((val, i) => (
          <ul
            key={`serviceCardDesc-${i}`}
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
          >
            <li>
              <span style={{ fontWeight: 700 }}> {val.title}</span>
              <br />
              <span style={{ fontWeight: 500 }}>{val.description}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
