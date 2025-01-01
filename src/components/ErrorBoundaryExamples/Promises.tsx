// No agarra promesas asincronas
// lo que se puede hacer es manejarlo en el catch
import { useState } from "react";

export const Promises = () => {
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    throw new Error("Promise has failed");
  };
  fetchData().catch((err) => {
    setData(err.message);
    throw new Error("Promise now has failed");
  });

  return <div>promise error: {data}</div>;
};
