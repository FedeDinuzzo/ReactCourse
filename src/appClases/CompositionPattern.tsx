import "./App.css";
import { CompositionPatternButton, ColorRed, AppForm } from "./components";

function App() {
  // validaciones de form submit -> etc
  const submit = () => {
    console.log("Submitted");
  };

  const handleClick = () => {
    console.log("Clickeado");
  };

  return (
    <CompositionPatternButton parentMethod={handleClick}>
      <ColorRed>My Label</ColorRed>
      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </CompositionPatternButton>
  );
}

export default App;
