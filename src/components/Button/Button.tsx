import "./Button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}
export const Button = ({ label, parentMethod }: Props) => {
  return (
    // Emitimos un evento al padre
    // No lo ejecutamos: "parentMethod()" porque el padre lo va a manejar
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
};
