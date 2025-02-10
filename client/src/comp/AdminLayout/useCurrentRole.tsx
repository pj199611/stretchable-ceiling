"use client";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

const FindCurrentRole = () => {
  const [role, setRole] = useState("");
  // const [token, setToken] = useState();

  // Added authentication checks or other admin-specific logic
  useEffect(() => {
    // Only access localStorage in the client (browser)
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("access_token");
      // setToken(storedData);
      if (storedData) {
        const decoded = jwtDecode(storedData);
        if (decoded && decoded["role"]) {
          const newRole = decoded["role"];
          localStorage.setItem("role", newRole);
          setRole(newRole);
        }
      }
    }
  }, []);

  return { role };
};

export default FindCurrentRole;
