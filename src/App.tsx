import { useState } from "react";
import { Button } from "./components";
import "./App.css";

function App() {
  // Hooks gancho de react
  // Utilizamos el useState para bindear el estado del componente y poder actualizarlo
  const [count, setCount] = useState(0);

  const countMore = () => {
    // Calculamos los incrementos en un solo `setTimeout`
    let increment = 0;
    const interval = setInterval(() => {
      increment += 1;
      setCount((count) => count + 1);

      // Limpiamos el intervalo después de 3 incrementos
      if (increment === 3) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <>
      {/* Para evitar que cada vez que hagas click se cree un metodo y se ejecute, pasamnos la referencia */}
      <Button label={`Count is ${count}`} parentMethod={countMore} />
    </>
  );
}
export default App;
