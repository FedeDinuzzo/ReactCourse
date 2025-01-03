import "./App.css";
import { useEffect, useState } from "react";
import { getCharacterNormal, getCharacter } from "./services/api.service";
import { emptyCharacter, Character } from "./models";
import { useApi } from "./hooks/useApi";

function App() {
  // const [data, setData] = useState<Character>(emptyCharacter);

  // const fetchCharacter = async () => {
  //   const result = await getCharacterNormal(1);
  //   setData(result.data);
  // };

  // useEffect(() => {
  //   fetchCharacter();
  // }, []);
  // Si viene autofetch ya tiene la data
  const { loading, error, data, fetch } = useApi<Character, number>(getCharacter, { autoFetch: false, params: 1 });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Ups: {error.message}</p>;
  }

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={() => fetch(2)}>Manual Fetch</button>
    </>
  );
}

export default App;

// SEGUNDO EJEMPLO EN useApi.ts
