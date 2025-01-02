// import "./App.css";
// import { useEffect, useState } from "react";
// import { getCharacter } from "./services/api.service";
// import { emptyCharacter, Character } from "./models";

// function App() {
//   const [data, setData] = useState<Character>(emptyCharacter);

//   const fetchCharacter = async () => {
//     const result = await getCharacter(1);
//     setData(result.data);
//   };

//   useEffect(() => {
//     fetchCharacter();
//   }, []);

//   return <>{JSON.stringify(data)}</>;
// }

// export default App;
