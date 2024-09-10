import { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was usedoutside AuthProvider");
  return context;
}
