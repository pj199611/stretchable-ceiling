"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Card from "@/comp/card/subCategory";
import { getSubCategoryList } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";
import CircularProgress from "@/comp/Loader/CircularLoader";
import Title from "@/comp/PageTitle/Title";

const img =
  "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/aluminum-pvc-fabric-stretch-ceiling-fabric-light-box-t20231128105948.png";

const subCategoryImageDictionary = {
  Printed:
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Printed.jpg?updatedAt=1739197761842",
  Translucent:
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Translucent.jpg",
  "Lacquer Ceiling":
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Lacquer%20Ceiling.jpg",
  "SC Tiles":
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/SC%20Tiles.jpg",
  "Fibre optics":
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Fibre%20Optics.jpg",
  "3D": "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/3D.jpg",
  "3D Virtual Window":
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/3D%20Virtual%20Window.png",
  "SC on Pillars":
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/SC%20on%20Pillars.jpg",
  "Dome Shaped":
    "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Dome%20Shaped.png",
};
const SubCategoryPage = () => {
  const pathname = usePathname();
  const { dispatch } = useProduct();
  const categoryId: string = pathname?.split("/subcategory/")?.[1] || "";

  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSubCategoryList(categoryId)
      .then((res: any) => {
        setData(res);
      })
      .catch((err) => setData([]))
      .finally(() => setIsLoading(false));
    dispatch({ type: "updateCategoryId", payload: categoryId });
  }, []);

  if (isLoading) return <CircularProgress />;
  // if (!data || !data.subCategories?.length) return notFound();

  return (
    <>
      <Title title="Types of Ceilings" />
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
                imageUrl={subCategoryImageDictionary[val.name] || img}
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
            description={
              "Customizing your Ceiling is an effective way to set the mood and design style for a room. Whether opting for a bold statement ceiling or a subtle, textured finish, your ceiling is a great way to elevate the entire look of your space."
            }
            imageUrl={
              "https://t4.ftcdn.net/jpg/03/29/52/67/360_F_329526704_4cfLIedQdh8wSEdGAM4NZWkeeHNSrakl.jpg"
            }
            additionalDetails={`₹ 850+ per sq feet`}
          />
        </Link>
      </div>
    </>
  );
};
export default SubCategoryPage;
