import { useCallback, useState } from "react";

export default function useRole() {
  const [role, setRole] = useState("user");

  const updateRole = useCallback(() => {
    setRole((role) => role);
  }, []);

  return { role, updateRole };
}
