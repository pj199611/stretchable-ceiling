"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "@/comp/card/product-card-8/index";
import Tabs from "@/comp/Tabs/Tabs";
import { getAllProductList, getProductClasses } from "@/utils/api/guestUser";

const ProductsPage = () => {
  const [activeClass, setActiveClass] = useState<string>("All");
  const [allClasses, setAllClasses] = useState<string[]>([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductClasses().then((res) => {
      if (res.length > 0) setAllClasses(["All", ...res]);
    });
  }, []);

  useEffect(() => {
    getAllProductList().then((res) => {
      console.log(res);
      setData(res?.products);
    });
  }, []);

  return (
    <>
      {allClasses.length > 0 && (
        <Tabs
          allClasses={allClasses}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
        />
      )}
      <div
        className="m-4"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {data.map((val) => (
          <Link href={`/product-details/black-sofa`}>
            <ProductCard key={val._id} product={val} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default ProductsPage;
