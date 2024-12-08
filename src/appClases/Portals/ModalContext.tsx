import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  state: false,
  setState: () => null,
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, setState] = useState<boolean>(false);

  return <ModalContext.Provider value={{ state, setState }}>{children}</ModalContext.Provider>;
};
