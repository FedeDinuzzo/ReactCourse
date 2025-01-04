// Creamos un PrivateGuard para mantener el AppRouter limpio y ordenado
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRouter = () => {
  return (
    <Routes>
      {/* /private/ corresponde a la del route de abajo */}
      <Route path="/" element={<Navigate to="/dashboard" />}></Route>
    </Routes>
  );
};
