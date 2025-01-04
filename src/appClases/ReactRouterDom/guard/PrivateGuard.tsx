import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
  const token = localStorage.getItem("token");
  // const authenticated = false;

  // return authenticated ? <Outlet /> : <Navigate to="/login" />;
  return token ? <Outlet /> : <Navigate to="/private/dashboard" replace />;
  // Ejemplo, este usuario ha intentado ingresar a una ruta que no existe, volve...
  // a donde vuelve? mandalo a la primera ruta privada
  // automaticamente verifica si estas loggeado y si no lo estas te va a mandar al login igual

  // return token ? <Outlet /> : <Navigate to="/login" replace />;
};

// replace remplaza la ruta en su totalidad
// si estoy en /public/login/user/test
// y le digo navega al login queda /public/login/
// si le digo replace queda /login
