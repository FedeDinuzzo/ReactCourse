import "./App.css";
import { useEffect, useState } from "react";
import { getCharacterNormal, getCharacter } from "../services/api.service";
import { emptyCharacter, Character } from "../models";
import { useApi } from "../hooks/useApi";

function App() {
  // const [data, setData] = useState<Character>(emptyCharacter);

  // const fetchCharacter = async () => {
  //   const result = await getCharacterNormal(1);
  //   setData(result.data);
  // };

  // useEffect(() => {
  //   fetchCharacter();
  // }, []);
  const { loading, error, data, fetch } = useApi<Character>(getCharacter(1), { autoFetch: true });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Ups: {error.message}</p>;
  }

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={fetch}>Manual Fetch</button>
    </>
  );
}

export default App;

// SEGUNDO EJEMPLO EN useApi.ts
