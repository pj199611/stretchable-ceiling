"use client";
import { use, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { notFound } from "next/navigation";
import ProductDetailsPageView from "@/comp/ProductDetails/ProductDetailsCard";
import { getProductDetails } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";
import CircularLoader from "@/comp/Loader/CircularLoader";

// export const metadata = {
//   title: "Product Details - Nest and Nook",
//   description: `Product Details`,
//   authors: [{ name: "Aman", url: "" }],
//   keywords: ["Product Details", " - Nest and Nook"],
// };

const ProductDetails = ({ params }: any) => {
  const { productId } = use(params);
  // const productId = Params.productId;
  const { state, dispatch } = useProduct();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch({ type: "updateProductId", payload: productId });
    getProductDetails({
      categoryId: state.categoryId,
      subCategoryId: state.subcategoryId,
      productId: productId,
    }).then((res) => {
      if (res.length > 0) setData(res[0]);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) return <CircularLoader />;
  if (data.name)
    return (
      <Container className="mt-2 mb-2">
        <ProductDetailsPageView
          _id={data._id}
          name={data.name}
          description={data.description}
          product_price={data.product_price}
          images={data.images}
          thumbnail={data.thumbnail}
          Class={data.class}
          data={data}
        />
        {/* ---------------ADD---------------- */}
        {/* Description & Reviews */}
      </Container>
    );
};
export default ProductDetails;
