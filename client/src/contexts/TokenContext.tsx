"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

// ============================================================
export type TokenOptions = { access_token: string; role: string };
// ============================================================

// SET "rtl" OR "ltr" HERE
// THEN GOTO BROWSER CONSOLE AND RUN localStorage.clear() TO CLEAR LOCAL STORAGE
const initialToken = { access_token: "", role: "user" };

export const TokenContext = createContext({
  token: initialToken,
  updateToken: (arg: TokenOptions) => {},
});

export default function TokenProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState(initialToken);

  const updateToken = (updatedToken: TokenOptions) => {
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

  //   useEffect(() => {
  //     if (!window) return;
  //     const getItem = window.localStorage.getItem("settings");
  //     if (getItem) setSettings(JSON.parse(getItem));
  //     else setSettings(initialSettings);
  //   }, []);

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
}
