import { useState, useEffect } from "react";
import { shareValueChildren } from "../../services";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const ChildrenButton = ({ label }: Pick<Props, "label">) => {
  const service = shareValueChildren;
  const [labelState, setLabelState] = useState(service.getValue());

  useEffect(() => {
    setTimeout(() => {
      setLabelState(service.getValue());
    }, 1000);
  }, [service]);

  return <div>{labelState}</div>;
};

export const CompositionPatternButton = ({ label, parentMethod }: Props) => {
  return (
    <>
      <button onClick={parentMethod}>
        <ChildrenButton label={label} />
      </button>
    </>
  );
};
