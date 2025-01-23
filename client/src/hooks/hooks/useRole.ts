import { useCallback, useState } from "react";

export default function useRole() {
  const [role, setRole] = useState("user");
  const [token, setToken] = useState(undefined);

  const updateRole = useCallback((newRole: string) => {
    setRole(newRole);
  }, []);

  const updateToken = useCallback((newToken: string) => {
    setToken(newToken);
  }, []);

  return { role, updateRole, token, updateToken };
}
