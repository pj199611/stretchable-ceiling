// "use client";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Card from "@/comp/card/subCategory";
import data from "@/data/data/subcategories";
import { getSubCategoryList } from "@/utils/api/guestUser";

const SubCategoryPage = async ({ params }) => {
  // const router = useRouter();
  // const pathname = usePathname();
  // console.log(params.categoryId);
  const data = await getSubCategoryList(params?.categoryId);

  // console.log(router.query);
  if (!data || !data.subCategories?.length) return notFound();
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.subCategories.map((val) => (
        <Link href={`/products/${val?.subcategory_id}`}>
          <Card
            title={val.name}
            description={val.description}
            imageUrl={val.imageUrl}
            additionalDetails={`₹ ${val?.fixedPrice} ${val?.priceDetails}`}
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
