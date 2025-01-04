import "./App.css";
import { AppRouter } from "../AppRouter";
import { GlobalProvider } from "./context/global.provider";
import ErrorBoundary from "./ErrorBoundary";
import { ModalProvider } from "./appClases/Portals/context/ModalContext.tsx";
import App from "./App";

function AppHookContainer() {
  return (
    <AppRouter>
      <GlobalProvider>
        <ErrorBoundary>
          <ModalProvider>
            <App>
              <AppRouter />
            </App>
          </ModalProvider>
        </ErrorBoundary>
      </GlobalProvider>
    </AppRouter>
  );
}

export default AppHookContainer;
