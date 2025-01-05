import { Navigate, Outlet } from "react-router-dom";

export const AdminGuard = () => {
  const isAdmin = true;

  return isAdmin ? <Outlet /> : <Navigate to="/private/dashboard" replace />;
};
