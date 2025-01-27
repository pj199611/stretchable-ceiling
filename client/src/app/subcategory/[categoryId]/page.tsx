"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Card from "@/comp/card/subCategory";
import { getSubCategoryList } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";
import CircularProgress from "@/comp/Loader/CircularLoader";

const img =
  "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/aluminum-pvc-fabric-stretch-ceiling-fabric-light-box-t20231128105948.png";

const SubCategoryPage = () => {
  const pathname = usePathname();
  const { dispatch } = useProduct();
  const categoryId: string = pathname?.split("/subcategory/")?.[1] || "";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSubCategoryList(categoryId)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => setData([]))
      .finally(() => setIsLoading(false));
    dispatch({ type: "updateCategoryId", payload: categoryId });
  }, []);

  if (isLoading) return <CircularProgress />;
  // if (!data || !data.subCategories?.length) return notFound();

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data?.subCategories?.length > 0 &&
        data.subCategories.map((val, index) => (
          <Link
            href={`/products/${val?._id}`}
            key={`link-${val.name}-${index}`}
          >
            <Card
              key={`${val.name}-${index}`}
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
          key="customize"
          title={"Customize"}
          description={"Customize your ceiling"}
          imageUrl={
            "https://t4.ftcdn.net/jpg/03/29/52/67/360_F_329526704_4cfLIedQdh8wSEdGAM4NZWkeeHNSrakl.jpg"
          }
          additionalDetails={`₹ 850+ per sq feet`}
        />
      </Link>
    </div>
  );
};
export default SubCategoryPage;
