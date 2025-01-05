// Creamos un PrivateGuard para mantener el AppRouter limpio y ordenado
import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import RoutesWithNotFound from "../../../components/RoutesWithNotFound";
import { AppRoutes } from "../../../models/routes.model";

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      {/* /private/ corresponde a la del route de abajo */}
      <Route path="/" element={<Navigate to={AppRoutes.private.dashboard} />} />
      <Route path={AppRoutes.private.dashboard} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};
