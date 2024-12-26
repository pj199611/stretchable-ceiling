import { useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import useCart from "@/hooks/useCart";
import { addToWishlist, delWishlist } from "@/services/authApi";

export default function useProduct(
  product: any,
  length: number = 1,
  width: number = 1
) {
  const { state, dispatch } = useCart();
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    state.wishlist?.filter((val) => val._id === product._id).length > 0
  );

  const cartItem = state.cart?.find(
    (item) =>
      item.id === product._id && item.length === length && item.width === width
  );

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      delWishlist({ productId: product._id }).then((res) =>
        dispatch({ type: "REMOVE_WISHLIST", payload: product._id })
      );
    } else {
      addToWishlist({ productId: product._id }).then((res) =>
        dispatch({
          type: "UPDATE_WISHLIST",
          payload: state.wishlist?.concat(product),
        })
      );
    }
    setIsFavorite((fav) => !fav);
  }, []);
  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);

  const handleCartAmountChange = (
    product: typeof cartItem,
    type?: "remove"
  ) => {
    dispatch({ type: "CHANGE_CART_AMOUNT", payload: product });
    // SHOW ALERT PRODUCT ADDED OR REMOVE
    if (type === "remove")
      enqueueSnackbar("Remove from Cart", { variant: "error" });
    else enqueueSnackbar("Added to Cart", { variant: "success" });
  };

  return {
    cartItem,
    openModal,
    isFavorite,
    toggleDialog,
    toggleFavorite,
    handleCartAmountChange,
  };
}
