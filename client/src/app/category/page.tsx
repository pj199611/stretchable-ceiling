import Card from "../../comp/card/card";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Link href="/subcategory">
        <Card
          title="Stretchable Ceiling"
          description="Discover the most beautiful ceiling designs."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
          link="/login"
        />
      </Link>
      <Link href="/subcategory">
        <Card
          title="Mountain Adventure"
          description="Explore breathtaking mountain landscapes."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
          link="login"
        />
      </Link>
      <Link href="/subcategory">
        <Card
          title="City Lights"
          description="The best urban exploration experiences."
          imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
          link="/subcategory"
        />
      </Link>
    </div>
  );
}
