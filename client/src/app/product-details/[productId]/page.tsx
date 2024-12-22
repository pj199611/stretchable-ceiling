"use client";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { notFound } from "next/navigation";
import ProductDetailsPageView from "@/comp/ProductDetails/ProductIntro";
import { getProductDetails } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";

// export const metadata = {
//   title: "Product Details - Nest and Nook",
//   description: `Product Details`,
//   authors: [{ name: "Aman", url: "" }],
//   keywords: ["Product Details", " - Nest and Nook"],
// };

const ProductDetails = ({ params }: any) => {
  const productId = params.productId;
  const { state, dispatch } = useProduct();
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch({ type: "updateProductId", payload: productId });
    getProductDetails({
      categoryId: state.categoryId,
      subCategoryId: state.subcategoryId,
      productId: productId,
    }).then((res) => {
      console.log(res);
      if (res.length > 0) setData(res[0]);
    });
  }, []);

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
        />
        {/* ---------------ADD---------------- */}
        {/* Description & Reviews */}
      </Container>
    );
};
export default ProductDetails;
