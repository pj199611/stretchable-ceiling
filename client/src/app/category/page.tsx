import Card from "@/comp/card/categorycard";
import Link from "next/link";
import { notFound } from "next/navigation";
// import data from "@/data/data/category";
import { getCategoryList } from "@/utils/api/guestUser";

const CategoryPage = async () => {
  const data = await getCategoryList();
  if (!data || !data.categories) return notFound();
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s";
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.categories.map((val) => (
        <Link href={`/subcategory/${val?._id}`}>
          <Card
            title={val.name}
            description={val.description}
            imageUrl={img || ""}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
