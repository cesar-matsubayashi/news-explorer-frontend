import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(UserContext);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
