import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<h1>Pagina no encontrada</h1>} />
    </Routes>
  );
};

export default RoutesWithNotFound;