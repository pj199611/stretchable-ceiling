import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useState,
  useEffect,
} from "react";
import Sticky from "@/components/sticky";
import { Footer1 } from "@/components/footer";
import Header from "@/components/header/header";
// import { SearchInputWithCategory } from "@/components/search-box";
import { MobileNavigationBar } from "@/components/mobile-navigation";
import useCart from "@/hooks/useCart";
import useUser from "@/hooks/useUser";
import { getWishlist, getCart, getUser } from "@/services/authApi";

export default function ShopLayout1({ children }: PropsWithChildren) {
  const [isFixed, setIsFixed] = useState(false);

  const { dispatch } = useCart();
  const { dispatch: userDispatch } = useUser();
  useEffect(() => {
    // Only access localStorage in the client (browser)
    if (typeof window !== "undefined") {
      const AccessToken = localStorage.getItem("access_token");
      if (AccessToken) {
        getUser().then((res: any) => {
          const newUser = {
            username: res.userName,
            avatar: "",
            mobile: "",
            mail: res.email,
            location: "",
          };
          userDispatch({ type: "ASSIGN_USER", payload: newUser });
        });
        getWishlist().then((res: any) => {
          dispatch({ type: "ASSIGN_WISHLIST", payload: res?.wishlist });
        });
        getCart().then((res: any) => {
          if (res?.cart) {
            const newCart = res?.cart?.map((val) => ({
              id: val.product._id,
              qty: val.quantity,
              price: val.price,
              length: val.length,
              width: val.width,
              name: val.name,
              imgUrl: val.imgUrl,
            }));
            dispatch({ type: "ASSIGN_CART", payload: newCart });
          } else {
            console.error("Cart data is missing:", res);
          }
        });
      }
    }
  }, []);

  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
  return (
    <Fragment>
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        {/* <Header isFixed={isFixed} midSlot={<SearchInputWithCategory />} /> */}
        <Header isFixed={isFixed} midSlot={null} />
      </Sticky>

      {children}

      {/* Mobile Bottom Tabs */}
      <MobileNavigationBar />

      <div style={{ position: "absolute", width: "100%" }}>
        <Footer1 />
      </div>
    </Fragment>
  );
}
