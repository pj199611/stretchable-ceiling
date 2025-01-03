"use client";

import { createContext, PropsWithChildren, useMemo, useReducer } from "react";
import { addToCart, delCart } from "@/services/authApi";
// =================================================================================
type InitialState = {
  cart: CartItem[];
  note: string;
  wishlist: any;
  location: string;
};

export type CartItem = {
  qty: number;
  name: string;
  price: number;
  imgUrl?: string;
  id: string | number;
  length: number;
  width: number;
};

type CartActionType =
  | { type: "CHANGE_CART_AMOUNT"; payload: CartItem }
  | { type: "ASSIGN_CART"; payload: CartItem[] }
  | { type: "CHANGE_NOTE"; payload: string }
  | { type: "ASSIGN_WISHLIST"; payload: any }
  | { type: "REMOVE_WISHLIST"; payload: string }
  | { type: "ASSIGN_ORDERS"; payload: any }
  | { type: "CHANGE_LOCATION"; payload: string };

// =================================================================================

const INITIAL_STATE = {
  cart: [],
  note: "",
  wishlist: [],
  location: "delhi",
  orders: [],
};

// ==============================================================
interface ContextProps {
  state: InitialState;
  dispatch: (args: CartActionType) => void;
}
// ==============================================================

export const CartContext = createContext<ContextProps>({} as ContextProps);

const checkItem = (item: CartItem, cartItem: CartItem) => {
  return (
    item.id === cartItem.id &&
    item.length === cartItem.length &&
    item.width === cartItem.width
  );
};
const DelFromCart = async (payload: {
  productId: string;
  length: number;
  width: number;
}) => {
  await delCart(payload);
};
const UpdateCart = async (payload: {
  productId: string;
  quantity: number;
  length: number;
  width: number;
}) => {
  await addToCart(payload);
};

const reducer = (state: InitialState, action: CartActionType) => {
  switch (action.type) {
    case "CHANGE_NOTE":
      return { ...state, note: action.payload };

    case "ASSIGN_CART":
      return { ...state, cart: action.payload };

    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => checkItem(item, cartItem));

      // remove item
      if (cartItem.qty < 1) {
        DelFromCart({
          productId: cartItem.id,
          length: cartItem.length,
          width: cartItem.width,
        });
        const filteredCart = cartList.filter(
          (item) => !checkItem(item, cartItem)
        );
        return { ...state, cart: filteredCart };
      }

      // change qty
      if (exist) {
        UpdateCart({
          productId: cartItem.id,
          quantity: cartItem.qty,
          length: cartItem.length,
          width: cartItem.width,
        });
        const newCart = cartList.map((item) =>
          checkItem(item, cartItem) ? { ...item, qty: cartItem.qty } : item
        );
        return { ...state, cart: newCart };
      }

      // add item
      UpdateCart({
        productId: cartItem.id,
        quantity: cartItem.qty,
        length: cartItem.length,
        width: cartItem.width,
      });
      return { ...state, cart: [...cartList, cartItem] };

    case "ASSIGN_WISHLIST":
      return { ...state, wishlist: action.payload };

    case "REMOVE_WISHLIST":
      const newWishlist = state.wishlist?.filter(
        (val) => val._id !== action.payload
      );
      return { ...state, wishlist: newWishlist };

    case "ASSIGN_ORDERS":
      return { ...state, orders: action.payload };

    case "CHANGE_LOCATION":
      return { ...state, location: action.payload };

    default: {
      return state;
    }
  }
};

export default function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
