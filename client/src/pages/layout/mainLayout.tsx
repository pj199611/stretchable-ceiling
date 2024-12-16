"use client";

import { Fragment, PropsWithChildren, useCallback, useState } from "react";
import Sticky from "@/components/sticky";
import { Footer1 } from "@/components/footer";
import Header from "@/components/header/header";
import { SearchInputWithCategory } from "@/components/search-box";
import { MobileNavigationBar } from "@/components/mobile-navigation";

export default function ShopLayout1({ children }: PropsWithChildren) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
  return (
    <Fragment>
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} midSlot={<SearchInputWithCategory />} />
      </Sticky>

      {children}

      {/* Mobile Bottom Tabs */}
      <MobileNavigationBar />

      <div style={{ position: "fixed", width: "100%", left: 0, bottom: 0 }}>
        <Footer1 />
      </div>
    </Fragment>
  );
}
