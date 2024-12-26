import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import useCart from "@/hooks/useCart";
import TopHeader from "./components/top-header";
import MiniCartItem from "./components/cart-item";
import EmptyCartView from "./components/empty-view";
import BottomActions from "./components/bottom-actions";
import Scrollbar from "@/components/scrollbar";
import { CartItem } from "@/contexts/CartContext";

type Props = { toggleSidenav: () => void };

export default function MiniCart({ toggleSidenav }: Props) {
  const { push } = useRouter();
  const { state, dispatch } = useCart();
  const cartList = state.cart;

  const handleCartAmountChange = (amount: number, product: CartItem) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { ...product, qty: amount },
    });
  };

  const handleNavigate = (path: string) => () => {
    toggleSidenav();
    push(path);
  };

  return (
    <Box width="100%" minWidth={380}>
      {/* HEADING SECTION */}
      <TopHeader toggle={toggleSidenav} total={cartList?.length} />

      <Divider />

      <Box height={`calc(100vh - ${cartList?.length ? "275px" : "75px"})`}>
        {/* CART ITEM LIST */}
        {cartList?.length > 0 ? (
          <Scrollbar>
            {cartList.map((item) => (
              <MiniCartItem
                item={item}
                key={`${item.id}-${item.length}-${item.width}`}
                handleCartAmountChange={handleCartAmountChange}
              />
            ))}
          </Scrollbar>
        ) : (
          <EmptyCartView />
        )}
      </Box>

      {/* CART BOTTOM ACTION BUTTONS */}
      {cartList?.length > 0 ? (
        <BottomActions
          dispatch={dispatch}
          handleNavigate={handleNavigate}
        />
      ) : null}
    </Box>
  );
}
