"use client";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { getProductDetails } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";
import CircularLoader from "@/comp/Loader/CircularLoader";
import ProductDetailsPageView from "@/comp/ProductDetails/ProductDetailsCard";

interface ProductDetailsParams {
  productId: string;
}

const ProductDetails = ({ params }: { params: ProductDetailsParams }) => {
  const { productId } = params;

  const { state, dispatch } = useProduct();
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!productId) return; // Guard clause in case productId is not available
    setIsLoading(true);
    dispatch({ type: "updateProductId", payload: productId });
    getProductDetails({
      categoryId: state.categoryId,
      subCategoryId: state.subcategoryId,
      productId: productId,
    })
      .then((res: any) => {
        if (res.length > 0) setData(res[0]);
      })
      .finally(() => setIsLoading(false)); // Always stop loading
  }, [productId, state.categoryId, state.subcategoryId]);

  if (isLoading) return <CircularLoader />;

  if (data.name) {
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
      </Container>
    );
  }

  return null; // Add a fallback if no data is returned
};

export default ProductDetails;
