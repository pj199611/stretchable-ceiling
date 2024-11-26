import Link from "next/link";
import Card from "@/comp/card/subCategory";
import data from "@/data/data/subcategories";

const SubCategoryPage = () => {
  if (!data || !data.subCategories?.length) return "No Data Found";
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
            additionalDetails={`₹ ${val.fixedPrice} ${val.priceDetails}`}
          />
        </Link>
      ))}
    </div>
  );
};
export default SubCategoryPage;
