import { useCallback, useState } from "react";

export default function useRole() {
  const [role, setRole] = useState("user");

  // const updateRole = useCallback(() => {
  //   setRole((role) => role);
  // }, []);

  const updateRole = useCallback((newRole: string) => {
    setRole(newRole);
  }, []);

  return { role, updateRole };
}
