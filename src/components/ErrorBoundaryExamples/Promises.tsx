// No agarra promesas asincronas
// lo que se puede hacer es manejarlo en el catch
import { useState, useEffect } from "react";

export const Promises = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // NO LO TOMA ERRORBOUNDARY
    // const fetchData = async () => {
    //   throw new Error("Promise has failed");
    // };
    // fetchData().catch((err) => {
    //   setData(err.message);
    //   throw new Error("Promise now has failed");
    // });
  }, []);

  return <div>{data}</div>;
};
