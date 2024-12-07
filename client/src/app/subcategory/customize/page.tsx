"use client";

import Link from "next/link";
import { useState } from "react";
// import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";
import { UploadImage, AddUrl, ChooseDesign } from "@/comp/CustomizeCeiling";
import { H3 } from "@/components/Typography";
import Tabs from "@/comp/Tabs/Tabs";

const allClasses = [
  "Upload your own image",
  "Pick up a design",
  // "Add image URL",
];

const CustomizePage = ({}) => {
  const [activeClass, setActiveClass] = useState(allClasses[0]);

  return (
    <>
      {/* <Tabs
        allClasses={allClasses}
        activeClass={activeClass}
        setActiveClass={setActiveClass}
      /> */}

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <H3 className="p-1" mb={2}>
          {activeClass}
        </H3>

        {activeClass === allClasses[0] && <UploadImage />}
        {activeClass === allClasses[1] && <ChooseDesign />}
        {}
      </div>
    </>
  );
};
export default CustomizePage;
