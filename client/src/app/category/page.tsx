import Link from "next/link";
import { notFound } from "next/navigation";

import Card from "@/comp/card/categorycard";
import { getCategoryList } from "@/utils/api/guestUser";
import Title from "@/comp/PageTitle/Title";

interface Category {
  _id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

const CategoryPage = async () => {
  const data: any = await getCategoryList();
  // if (!data || !data.categories) return notFound();
  const img =
    "https://files.cdn-files-a.com/uploads/1230204/2000_5bc1b582eadf9.jpg";
  return (
    <>
      <Title title="Categories" />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data?.categories.map((val: Category) => (
          <Link href={`/subcategory/${val?._id}`}>
            <Card
              title={val.name}
              description={val.description}
              imageUrl={img || ""}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
