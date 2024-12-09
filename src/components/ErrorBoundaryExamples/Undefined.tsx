import { useState } from "react";

export const Undefined = () => {
  const [obj] = useState<{ prop?: string }>({});

  // quiero obetener el lenght de una propiedad que no existe
  return <div>{obj.prop!.length}</div>;
};
