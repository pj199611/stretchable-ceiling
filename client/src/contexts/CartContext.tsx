"use client";

import { createContext, PropsWithChildren, useMemo, useReducer } from "react";

// =================================================================================
type InitialState = { cart: CartItem[]; note: string };

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
  | {
      type: "CHANGE_CART_AMOUNT";
      payload: CartItem;
    }
  | {
      type: "CHANGE_NOTE";
      payload: string;
    };
// =================================================================================

const INITIAL_CART = [
  {
    id: "111", //productId
    qty: 1,
    price: 100,
    length: 1,
    width: 1,
    name: "NAME",
    imgUrl:
      "https://media.istockphoto.com/id/1416797815/photo/golden-number-one.jpg?s=612x612&w=0&k=20&c=A1AOP7RZK8Rkk2yxEumTlWmhQE-0nGfxVz3Ef39Dzxc=",
  },
];

const INITIAL_STATE = { cart: INITIAL_CART, note: "" };

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

const reducer = (state: InitialState, action: CartActionType) => {
  switch (action.type) {
    case "CHANGE_NOTE":
      return { ...state, note: action.payload };

    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => checkItem(item, cartItem));

      // remove item
      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter(
          (item) => !checkItem(item, cartItem)
        );
        return { ...state, cart: filteredCart };
      }

      // change qty
      if (exist) {
        const newCart = cartList.map((item) =>
          checkItem(item, cartItem) ? { ...item, qty: cartItem.qty } : item
        );

        return { ...state, cart: newCart };
      }

      // add item
      return { ...state, cart: [...cartList, cartItem] };

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
