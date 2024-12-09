import { useEffect } from "react";

export const Effect = () => {
  useEffect(() => {
    throw new Error("Error");
  }, []);

  return <div></div>;
};
