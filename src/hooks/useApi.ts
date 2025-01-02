// Hook Reutilizable para Manejo Simplificado de Llamadas a APIs

// REUTILIZACION Y ABSTRACCION
// useApi abstrae la lógica de manejo de peticiones
// facilitando el uso uniforme en diferentes componentes.
// Evita duplicar código para manejar estados (loading, error, y data).

// SOPORTE DE CANCELACION (loadAbort.utility.ts)
// Con AbortController, las peticiones pueden ser canceladas al desmontar el componente
// evitando errores como actualizaciones a estados desmontados.

// FLEXIBILIDAD CON AUTOFETCH
// useApi permite configurar si una solicitud debe realizarse automáticamente o manualmente usando el método fetch.

import { useCallback, useEffect, useState } from "react";
import { UseApiCall } from "../models/useApi.model";

// Tipo de opciones para el hook, define si la llamada se ejecutará automáticamente al montar el componente.
type UseApiOptions = {
  autoFetch?: boolean; // autoFetch indica si el fetch debe ejecutarse automáticamente.
};

// Data<T> representa el estado de los datos; puede ser del tipo T o nulo.
type Data<T> = T | null;

// CustomError representa el estado del error; puede ser del tipo Error o nulo.
type CustomError = Error | null;

// Interface que define lo que devolverá el hook useApi.
interface UseApiResult<T> {
  loading: boolean; // Indica si la solicitud está en curso.
  data: Data<T>; // Contiene los datos devueltos por la solicitud.
  error: CustomError; // Contiene un error, si ocurrió durante la solicitud.
  fetch(): void; // Método para iniciar manualmente la solicitud.
}

// Definición del hook personalizado useApi
export const useApi = <T>(
  apiCall: UseApiCall<T>, // apiCall es una función que retorna una promesa y un AbortController.
  options?: UseApiOptions // Opciones como autoFetch para personalizar el comportamiento.
): UseApiResult<T> => {
  const [loading, setLoading] = useState<boolean>(false); // Estado de carga.
  const [data, setData] = useState<Data<T>>(null); // Estado de los datos devueltos.
  const [error, setError] = useState<CustomError>(null); // Estado del error.

  // useCallback se usa para evitar la recreación innecesaria de la función fetch en cada render.
  // Esto es útil porque la dependencia "apiCall" puede ser una referencia constante.
  const fetch = useCallback(() => {
    const { call, controller } = apiCall; // Ejecuta la llamada a la API y obtiene el controlador para cancelarla.
    setLoading(true); // Inicia el estado de carga.
    call
      .then((response) => {
        setData(response.data); // Guarda los datos obtenidos.
        setError(null); // Limpia cualquier error previo.
      })
      .catch((error) => {
        setError(error); // Guarda el error ocurrido.
      })
      .finally(() => {
        setLoading(false); // Indica que terminó la solicitud, sea exitosa o no.
      });

    // Devuelve una función de limpieza que cancela la solicitud si el componente se desmonta.
    return () => controller.abort();
  }, [apiCall]);

  // Si la opción autoFetch es verdadera, ejecuta automáticamente el fetch al montar el componente.
  useEffect(() => {
    if (options?.autoFetch) {
      const cleanup = fetch();
      return cleanup; // Devuelve la función de limpieza.
    }
  }, [fetch, options]);

  // Retorna los datos, error, estado de carga y la función fetch al componente que usa el hook.
  return { loading, data, error, fetch };
};
