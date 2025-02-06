"use client";
import { jwtDecode } from "jwt-decode";
import React, { ReactNode, useState, useEffect } from "react";
import { FlexRowCenter } from "@/components/flex-box";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [role, setRole] = useState("");

  // Added authentication checks or other admin-specific logic
  useEffect(() => {
    // Only access localStorage in the client (browser)
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("access_token");
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

  return role === "admin" ? (
    <div className="admin-layout">{children}</div>
  ) : (
    <FlexRowCenter style={{ height: 300 }}>
      <h1>Please Login via Admin Creds</h1>
    </FlexRowCenter>
  );
};

export default AdminLayout;
