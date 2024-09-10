import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {replace: true})
    }
  },[isAuthenticated, navigate])

  return isAuthenticated ? children : null;
}