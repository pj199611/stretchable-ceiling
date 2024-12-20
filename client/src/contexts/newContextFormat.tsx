"use client";

import { createContext, PropsWithChildren, useMemo, useReducer } from "react";

type InitialState = any;

type ActionType = {
  type: string;
  payload: any;
};

const INITIAL_STATE = {};

export const CurrentContext = createContext({});

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case "ABC":
      return { ...state };

    default: {
      return state;
    }
  }
};

export default function CurrentProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CurrentContext.Provider value={contextValue}>
      {children}
    </CurrentContext.Provider>
  );
}
