"use client";

// NOT USED NOW

import { createContext, PropsWithChildren, useState } from "react";

export type TokenOptions = { access_token: string | null; role: string };

const initialToken = { access_token: null, role: "user" };

export const TokenContext = createContext({
  tokenAndRole: initialToken,
  updateTokenAndRole: (arg: TokenOptions) => {},
});

export default function TokenProvider({ children }: PropsWithChildren) {
  const [tokenAndRole, setToken] = useState(initialToken);

  const updateTokenAndRole = (updatedToken: TokenOptions) => {
    setToken({
      access_token: updatedToken?.access_token,
      role: updatedToken?.role,
    });
    window.localStorage.setItem(
      "access_token",
      JSON.stringify(updatedToken?.access_token)
    );
    window.localStorage.setItem("role", JSON.stringify(updatedToken?.role));
  };

  return (
    <TokenContext.Provider value={{ tokenAndRole, updateTokenAndRole }}>
      {children}
    </TokenContext.Provider>
  );
}
