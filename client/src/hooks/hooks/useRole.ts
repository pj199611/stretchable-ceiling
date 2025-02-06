import { useCallback, useState } from "react";

export default function useRole() {
  const [role, setRole] = useState<string>("user");
  const [token, setToken] = useState<string | null>(null);

  const updateRole = useCallback((newRole: string) => {
    setRole(newRole);
  }, []);

  const updateToken = useCallback((newToken: string | null) => {
    setToken(newToken);
  }, []);

  return { role, updateRole, token, updateToken };
}
