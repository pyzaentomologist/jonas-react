import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser"
import { Spinner } from "../ui/Spinner"
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  
  // 3. While loading show spinner
  if (isLoading) return (
    <FullPage>
      <Spinner />
    </FullPage>
  );
  // 4. If there IS a user, render the app

  if (isAuthenticated) return children;
}
