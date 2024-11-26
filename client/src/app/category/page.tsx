import Card from "@/comp/card/categorycard";
import Link from "next/link";
import data from "@/data/data/category";
import { getCategory } from "@/services/userApi";

const CategoryPage = async () => {
  // const res = await getCategory();
  // console.log(res);
  if (!data || !data.categories) return "No Data Found";
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.categories.map((val) => (
        <Link href={`/subcategory/${val?.category_id}`}>
          <Card
            title={val.name}
            description={val.description}
            imageUrl={val.imageUrl || ""}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
