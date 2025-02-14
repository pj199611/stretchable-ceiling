"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import useRole from "@/hooks/hooks/useRole";
import SingleToaster from "@/comp/Toaster/singleToaster";

const Logout = () => {
  const Router = useRouter();
  const { updateRole, updateToken } = useRole();
  const [toaster, setToaster] = useState({
    open: false,
    msg: "",
    severity: "success",
  });

  useEffect(() => {
    console.log("Logged Out!");
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    updateToken(null);
    setToaster({
      open: true,
      msg: "Logged Out Successfully!",
      severity: "success",
    });
    window.location.href = "/";
  }, []);

  return (
    <>
      {toaster.open && (
        <SingleToaster
          key={Date.now()}
          openNow={toaster.open}
          msg={toaster.msg}
          severity={toaster.severity}
        />
      )}
    </>
  );
};

export default Logout;
