// "use client";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Card from "@/comp/card/subCategory";
import { getSubCategoryList } from "@/utils/api/guestUser";

const SubCategoryPage = async ({ params }) => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s";

  // const router = useRouter();
  // const pathname = usePathname();
  // console.log(params.categoryId);
  const data = await getSubCategoryList(params?.categoryId);

  if (!data || !data.subCategories?.length) return notFound();
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.subCategories.map((val) => (
        <Link href={`/products/${val?._id}`}>
          <Card
            title={val.name}
            description={val.description}
            imageUrl={img || ""}
            additionalDetails={
              val?.price ? `₹ ${val?.price} per sq feet` : undefined
            }
          />
        </Link>
      ))}
      <Link href={`/subcategory/customize`}>
        <Card
          title={"Customize"}
          description={"Customize your ceiling"}
          imageUrl={
            "https://t4.ftcdn.net/jpg/03/29/52/67/360_F_329526704_4cfLIedQdh8wSEdGAM4NZWkeeHNSrakl.jpg"
          }
        />
      </Link>
    </div>
  );
};
export default SubCategoryPage;
