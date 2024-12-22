"use client";

import { createContext, PropsWithChildren, useMemo, useReducer } from "react";

type InitialState = any;

type ActionType = {
  type: string;
  payload: string;
};

const INITIAL_STATE = {
  categoryId: "",
  subcategoryId: "",
  productId: "",
  class: "",
};

export const ProductContext = createContext({});

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case "updateCategoryId":
      return {
        ...state,
        categoryId: action.payload,
        subcategoryId: "",
        productId: "",
        class: "",
      };
    case "updateSubCategoryId":
      return {
        ...state,
        subcategoryId: action.payload,
        productId: "",
        class: "",
      };
    case "updateProductId":
      return { ...state, productId: action.payload };
    case "updateClass":
      return { ...state, class: action.payload };
    default: {
      return state;
    }
  }
};

export default function ProductProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  console.log("state", state);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

// "use client";

// import { createContext, PropsWithChildren, useEffect, useState } from "react";

// export type IdProps = {
//   categoryId?: string;
//   subcategoryId?: string;
//   productId?: string;
// };

// const initialIds = { acategoryId: "", subcategoryId: "", productId: "" };

// export const ProductContext = createContext({
//   ids: initialIds,
//   updateIds: (arg: IdProps) => {},
// });

// export default function ProductProvider({ children }: PropsWithChildren) {
//   const [ids, setIds] = useState(initialIds);

//   const updateIds = (updatedIds: IdProps) => {
//     const newIds = { ...ids, updateIds };
//     setIds(newIds);
//   };

//   return (
//     <ProductContext.Provider value={{ ids, updateIds }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }
