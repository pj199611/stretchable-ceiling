"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import ProductCard from "@/comp/card/product-card-8/index";
import Tabs from "@/comp/Tabs/Tabs";
import { getProductClasses, getClassProductList } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";
import Empty from "@/comp/Empty";
import NoProducts from "@/images/no-product-found.png";
import CircularLoader from "@/comp/Loader/CircularLoader";
import Title from "@/comp/PageTitle/Title";

const ProductsPage = ({ params }) => {
  const { subcategoryId } = use(params);
  const [activeClass, setActiveClass] = useState<string>("All");
  const [allClasses, setAllClasses] = useState<string[]>([]);
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const { state, dispatch } = useProduct();

  useEffect(() => {
    getProductClasses().then((res) => {
      if (res.length > 0) setAllClasses(["All", ...res]);
    });
    dispatch({ type: "updateSubCategoryId", payload: subcategoryId });
    dispatch({ type: "updateClass", payload: activeClass });
  }, []);

  useEffect(() => {
    setIsDataLoading(true);
    getClassProductList({
      categoryId: state.categoryId,
      subCategoryId: subcategoryId,
      Class: activeClass === "All" ? "" : activeClass,
    })
      .then((res) => setData(res))
      .catch((err) => setData([]));
    setIsDataLoading(false);
  }, [activeClass]);

  const handleClassChange = (val) => {
    setActiveClass(val);
    dispatch({ type: "updateClass", payload: val });
  };

  if (isDataLoading) return <CircularLoader />;

  return (
    <>
      <Title title="Select your Product" />
      {allClasses.length > 0 && (
        <Tabs
          allClasses={allClasses}
          activeClass={activeClass}
          onChange={handleClassChange}
        />
      )}
      {data.length > 0 ? (
        <div
          className="m-2"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
        >
          {data.map((val) => (
            <ProductCard key={val._id} product={val} />
          ))}
        </div>
      ) : (
        <Empty img={NoProducts} msg="" imgProps={{ width: 600, height: 300 }} />
      )}
    </>
  );
};
export default ProductsPage;
