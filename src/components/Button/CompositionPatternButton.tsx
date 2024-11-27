import { ReactNode } from "react";
import { useGlobalContext } from "../../context/global.context";

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext();

  return (
    <>
      <div style={{ color: "red" }}>
        {value}:{children}
      </div>
    </>
  );
};

export const CompositionPatternButton = ({ children, parentMethod }: Props) => {
  const { setValue } = useGlobalContext();

  const handleClick = () => {
    setValue(10);
    parentMethod();
  };
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
};
