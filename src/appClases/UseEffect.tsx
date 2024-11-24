import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Se utiliza cuando cambia algo externo
  // Comunicarnos con un endpoint
  // Operacion async
  // Context

  // NO hacer un fetch dentro de un UseEffect
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/data");

      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const jsonData = await response.json();

      setData(jsonData);
    } catch (err) {
      setError(err as string);
    } finally {
      // Siempre se va a ejecutar independientemente de la respuesta del try
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // No poner [data] en el array de dependencias porque se va a ejecutar siempre

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>UPS! Hay un error: {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
