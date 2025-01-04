import "./App.css";
import { ReactNode } from "react";
// import { AppRouter } from "../AppRouter";
// import { GlobalProvider } from "./context/global.provider";

interface Props {
  children: ReactNode;
}
function App({ children }: Props) {
  return (
    // <AppRouter>
    //   <GlobalProvider>
    //     <h1>App</h1>
    //   </GlobalProvider>
    // </AppRouter>
    // Esto generaria un riu react programming haduken = infinito
    // AppHookContainer.tsx
    // y queda el app limpio
    // <h1>App</h1>
    <>
      <p>navbar</p>
      {children}
      <p>footer</p>
    </>
  );
}

export default App;
