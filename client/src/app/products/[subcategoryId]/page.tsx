"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import ProductCard from "@/comp/card/product-card-8/index";
import Tabs from "@/comp/Tabs/Tabs";
import { getProductClasses, getClassProductList } from "@/utils/api/guestUser";
import useProduct from "@/hooks/useProduct";

const ProductsPage = ({ params }) => {
  const { subcategoryId } = use(params);
  const [activeClass, setActiveClass] = useState<string>("All");
  const [allClasses, setAllClasses] = useState<string[]>([]);
  const [data, setData] = useState([]);
  const { state, dispatch } = useProduct();

  useEffect(() => {
    getProductClasses().then((res) => {
      if (res.length > 0) setAllClasses(["All", ...res]);
    });
    dispatch({ type: "updateSubCategoryId", payload: subcategoryId });
    dispatch({ type: "updateClass", payload: activeClass });
  }, []);

  useEffect(() => {
    getClassProductList({
      categoryId: state.categoryId,
      subCategoryId: subcategoryId,
      Class: activeClass === "All" ? "" : activeClass,
    })
      .then((res) => {
        setData(res);
      })
      .catch((err) => setData([]));
  }, [activeClass]);

  const handleClassChange = (val) => {
    setActiveClass(val);
    dispatch({ type: "updateClass", payload: val });
  };

  return (
    <>
      {allClasses.length > 0 && (
        <Tabs
          allClasses={allClasses}
          activeClass={activeClass}
          onChange={handleClassChange}
        />
      )}
      <div
        className="m-4"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {data.length > 0 &&
          data.map((val) => <ProductCard key={val._id} product={val} />)}
      </div>
    </>
  );
};
export default ProductsPage;
