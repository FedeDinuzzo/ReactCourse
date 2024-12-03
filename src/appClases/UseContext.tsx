import "./App.css";
import { CompositionPatternButton, ColorRed, AppForm } from "./components";
import { GlobalProvider } from "./context/global.provider";

function App() {
  // validaciones de form submit -> etc
  const submit = () => {
    console.log("Submitted");
  };

  const handleClick = () => {
    console.log("Clickeado");
  };

  return (
    <GlobalProvider>
      <CompositionPatternButton parentMethod={handleClick}>
        <ColorRed>My Label</ColorRed>
        <AppForm>
          <button type="submit" onClick={submit}></button>
        </AppForm>
      </CompositionPatternButton>
    </GlobalProvider>
  );
}

export default App;
