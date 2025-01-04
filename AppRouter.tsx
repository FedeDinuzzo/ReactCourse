import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { Login } from "./src/appClases/ReactRouterDom/public/Login";
// import { Dashboard } from "./src/appClases/ReactRouterDom/private/Dashboard";
import { PrivateGuard } from "./src/appClases/ReactRouterDom/guard/PrivateGuard";
import { PrivateRouter } from "./src/appClases/ReactRouterDom/private/PrivateRouter";
// import { AdminGuard } from "./src/appClases/ReactRouterDom/guard/AdminGuard";
import RoutesWithNotFound from "./src/components/RoutesWithNotFound";

export const AppRouter = () => {
  return (
    // <Routes> ya lo tiene el RoutesWithNotFound
    <BrowserRouter>
      <RoutesWithNotFound>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/Login" element={<Login />} />

        <Route element={<PrivateGuard />}>
          <Route path="/private/*" element={<PrivateRouter />} />
          {/* * signfica lo que venga despues, ingesa */}

          {/* <Route element={<AdminGuard />}> */}
          {/* <Route path="/private" element={<Dashboard />} /> */}
          {/* </Route> */}
        </Route>
        {/* <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<h1>Pagina no encontrada</h1>} /> 
      como esto no sirve para una ruta privada invalida ejemplo /private/about/use se usa:*/}
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
