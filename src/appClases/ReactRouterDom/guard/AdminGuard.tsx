import { Navigate, Outlet } from "react-router-dom";

export const AdminGuard = () => {
  const isAdmin = tre;

  return isAdmin ? <Outlet /> : <Navigate to="/private/dashboard" replace />;
};
