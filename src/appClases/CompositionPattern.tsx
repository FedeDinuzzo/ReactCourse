import "./App.css";
import { CompositionPatternButton, ColorRed } from "./components";

function App() {
  const handleClick = () => {
    console.log("Clickeado");
  };

  return (
    <CompositionPatternButton parentMethod={handleClick}>
      <ColorRed>My Label</ColorRed>
    </CompositionPatternButton>
  );
}

export default App;
