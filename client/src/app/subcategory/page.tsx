import Card from "../../comp/card/card";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Card
        title="A Ceiling"
        description="Discover the most beautiful ceiling designs."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
        link="/login"
      />
      <Card
        title="B Ceiling"
        description="Explore breathtaking mountain landscapes."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
        link="/signup"
      />
      <Card
        title="C Ceiling"
        description="The best urban exploration experiences."
        imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
        link="#"
      />
    </div>
  );
}
