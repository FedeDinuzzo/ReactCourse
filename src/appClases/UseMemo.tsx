// REACT 19 no soporta el hook useMemo

// Objetivo:
// Memorizar (cache), el resultado de ejecutar una funcion COSTOSA, para evitar que se vuelva a llamar el metodo
// Controlar si el beneficio de memorizarlo es superior al de recaulcularlo

// Sirve:
// Calculos costosos: Si tienes una función o cálculo que requiere mucho procesamiento (como filtrar o clasificar listas grandes)
// Dependencias inmutable: Cuando dependes de objetos o arrays que no cambian frecuentemente
// Optimización de hijos memoizados: Si pasas valores computados como props a un componente hijo que está memoizado, puede prevenir renders innecesarios.

// Antes de usar useMemo, pregúntate:
// ¿Este cálculo es realmente costoso o afecta el rendimiento de manera notable?
// ¿Estoy intentando evitar renders innecesarios de un componente hijo?
// ¿Estoy seguro de que mis dependencias están correctamente configuradas?

// Ejemplo:
// Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra
// Si no agregamos nada ni tampoco cambio nada, cual es el costo total? EL MISMO

import { useMemo, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "manzana",
      price: 1.5,
    },
    {
      id: 2,
      name: "pera",
      price: 2,
    },
    {
      id: 3,
      name: "banana",
      price: 3,
    },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  // Calculo costoso flasheemos mas de 1 millon de productos
  const totalCost = useMemo(() => items.reduce((total, item) => total + item.price, 0), [items]);

  // Si el descuento es el mismo cuando lo cambiamos, no se recalcula
  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      price: Math.random() * 5,
    };

    setItems([...items, newItem]);
  };

  return (
    <>
      <div>
        <h2>Lista de Compras</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${totalCost.toFixed(2)}</p>
        <p>
          Descuento:{" "}
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(parseFloat(e.target.value)) || 0)}
          />
        </p>
        <p>Total con descuento: ${finalCost.toFixed(2)}</p>
        <button onClick={addItem}>Agregar Item</button>
      </div>
    </>
  );
};
