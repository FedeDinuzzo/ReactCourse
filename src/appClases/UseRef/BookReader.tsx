// Para sincronizar cosas internas del componente
// A diferencia del useEffect que es para cosas externas del componente

// Objetivo 1:
// Nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// SIN causar un re render

// Objetivo 2:
// Hacer referencia a un elemento del DOM

// Ejemplo:
// Un marcador de un libro que utilizamos para guardar la posicion de la ultima lectura
// NO modifica el contenido del libro

import { useRef, useState } from "react";

export const BookReader = () => {
  const currentPageRef = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avanzaste a la pagina ${currentPageRef.current}`);
  };

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log(`No se puede retroceder la pagina, porque estas en la pagina ${currentPageRef.current}`);
      return;
    }

    currentPageRef.current -= 1;
    console.log(`Retrocedistes a la pagina ${currentPageRef.current}`);
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log(`No se puede saltar a un valor imposible`);
      return;
    }

    currentPageRef.current = page;
    setCurrentPage(page);
    console.log(`Saltaste a la pagina ${currentPageRef.current}`);
  };

  return (
    <>
      <div>
        <h2>Lectura de libro</h2>
        <p>Pagina actual: {currentPageRef.current}</p>
        <p>Pagina actual STATE: {currentPage}</p>
        <button onClick={previousPage}>Pagina Anterior</button>
        <button onClick={nextPage}>Pagina Siguiente</button>
        <button onClick={() => goToPage(50)}>Ir a la pagina 50</button>
      </div>
    </>
  );
};
