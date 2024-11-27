import { useState, createContext, ReactNode, useContext } from "react";

// Un contexto es un canal de comunicacion entre componentes, sin tener que pasar props
// Todo lo que se encuentra dentro del provider escuchar al contexto
// El contexto sirve para compartir informacion entre componentes hermanos que no tienen una conexion directa y por ejemplo para el manejo de sesiones
interface GlobalContextType {
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context.value && context.value !== 0) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};

// Reiniciar los valores del contexto de ser necesario
const EmptyGlobalState: number = 0;

interface GlobalProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState);

  return <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>;
};
