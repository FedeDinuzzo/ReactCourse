import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ColorRed = ({ children }: ChildrenProps) => {
  return <div style={{ color: "red" }}>{children}</div>;
};

export const CompositionPatternButton = ({ children, parentMethod }: Props) => {
  return (
    <>
      <button onClick={parentMethod}>{children}</button>
    </>
  );
};
