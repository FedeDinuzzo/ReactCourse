import "./App.css";
import { useEffect } from "react";
import { CompositionPatternButton } from "./components";
import { shareValueChildren } from "./services";

function App() {
  const services = shareValueChildren;

  const handleClick = () => {
    console.log("Clickeado");
  };

  useEffect(() => {
    services.setValue("Fede");
  }, []);

  return <CompositionPatternButton label="Click" parentMethod={handleClick} />;
}

export default App;
