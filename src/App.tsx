import "./App.css";
import { Modal } from "./appClases/Portals/";
import { useModalContext } from "./appClases/Portals";

function App() {
  const { setState } = useModalContext();

  const openModal = () => setState(true);

  return (
    <>
      <Modal>
        <h2>Soy un Modal</h2>
      </Modal>
      <button onClick={openModal}>Abrir Modal</button>
    </>
  );
}

export default App;
