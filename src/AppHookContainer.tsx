import "./App.css";
import { AppRouter } from "../AppRouter";
import { GlobalProvider } from "./context/global.provider";
import ErrorBoundary from "./ErrorBoundary";
import { ModalProvider } from "./appClases/Portals/context/ModalContext.tsx";
import App from "./App";

function AppHookContainer() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <ModalProvider>
          <App>
            <AppRouter />
          </App>
        </ModalProvider>
      </GlobalProvider>
    </ErrorBoundary>
  );
}

export default AppHookContainer;
