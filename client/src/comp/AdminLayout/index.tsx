"use client";
import { jwtDecode } from "jwt-decode";
import React, { ReactNode, useState, useEffect } from "react";

interface AdminLayoutProps {
  children: ReactNode;
  comp?: any;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, comp = null }) => {
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
    comp
  );
};

export default AdminLayout;
