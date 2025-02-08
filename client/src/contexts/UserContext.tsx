"use client";

import { createContext, PropsWithChildren, useMemo, useReducer } from "react";

// const USER = {
//   username: "Aman",
//   avatar:
//     "https://media.istockphoto.com/id/1416797815/photo/golden-number-one.jpg?s=612x612&w=0&k=20&c=A1AOP7RZK8Rkk2yxEumTlWmhQE-0nGfxVz3Ef39Dzxc=",
//   mobile: 7890654321,
//   mail: "abc@gmial.com",
//   role: "",
//   location: "bangalore",
// };
const INITIAL_STATE = { user: {}, location: "bangalore" };

export const UserContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "ASSIGN_USER":
      return { ...state, user: action.payload };

    default: {
      return state;
    }
  }
};

export default function UserProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
