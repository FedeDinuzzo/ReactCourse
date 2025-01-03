/**
 * Hook Reutilizable para Manejo Simplificado de Llamadas a APIs
 *
 * Este hook abstrae la lógica necesaria para interactuar con APIs RESTful, incluyendo el manejo
 * de estados comunes como carga (loading), datos devueltos (data) y errores (error). Además,
 * ofrece funcionalidades como:
 *
 * 1. Reutilización: Facilita el uso uniforme de solicitudes API en diferentes componentes,
 *    evitando duplicación de código.
 *
 * 2. Cancelación de Solicitudes: Implementa `AbortController` para evitar solicitudes
 *    innecesarias o actualizaciones en componentes desmontados.
 *
 * 3. Flexibilidad: Permite configurar si las solicitudes deben ejecutarse automáticamente
 *    (autoFetch) o de forma manual mediante la función `fetch`.
 *
 * Uso Sugerido:
 * Este hook se puede emplear en componentes para reducir la complejidad y centralizar el manejo
 * de solicitudes, facilitando la legibilidad y la gestión del código.
 */
import { UseApiCall } from "../models"; // Modelo que define la estructura del API call y su controlador.
import { useCallback, useEffect, useState } from "react"; // Hooks de React.

type UseApiOptions<P> = {
  autoFetch?: boolean; // Indica si la API debe ser llamada automáticamente al montar el componente.
  params: P; // Parámetros que se usarán en la solicitud API.
};

type Data<T> = T | null; // Representa los datos obtenidos, que pueden ser de tipo genérico T o `null`.
type CustomError = Error | null; // Representa el estado de error, puede ser un objeto `Error` o `null`.

interface UseApiResult<T, P> {
  loading: boolean; // Indica si la solicitud está en curso.
  data: Data<T>; // Almacena los datos devueltos por la API.
  error: CustomError; // Almacena el error en caso de que la solicitud falle.
  fetch: (param: P) => void; // Función para realizar una solicitud manualmente con parámetros.
}

export const useApi = <T, P>(
  apiCall: (param: P) => UseApiCall<T>, // Función para realizar la llamada a la API que devuelve un controlador de solicitud.
  options?: UseApiOptions<P> // Opciones adicionales para configurar el hook.
): UseApiResult<T, P> => {
  // Estado para controlar si la solicitud está en progreso.
  const [loading, setLoading] = useState<boolean>(false);

  // Estado para almacenar los datos obtenidos de la API.
  const [data, setData] = useState<Data<T>>(null);

  // Estado para capturar y manejar errores.
  const [error, setError] = useState<CustomError>(null);

  // Función para realizar la solicitud a la API.
  const fetch = useCallback(
    (param: P) => {
      const { call, controller } = apiCall(param); // Se obtiene la llamada y el controlador de la función `apiCall`.
      setLoading(true); // Marca el inicio del proceso de carga.

      call
        .then((response) => {
          setData(response.data); // Almacena los datos en el estado.
          setError(null); // Limpia cualquier error anterior.
        })
        .catch((err) => {
          setError(err); // Almacena el error si ocurre alguno.
        })
        .finally(() => {
          setLoading(false); // Finaliza el estado de carga.
        });

      // Retorna una función que cancela la solicitud si el componente se desmonta.
      return () => controller.abort();
    },
    [apiCall] // `fetch` será actualizado cuando cambie la referencia a `apiCall`.
  );

  // Efecto para manejar el autoFetch al montar o actualizar el componente.
  useEffect(() => {
    if (options?.autoFetch) {
      return fetch(options.params); // Llama automáticamente a `fetch` con los parámetros si autoFetch está habilitado.
    }
  }, [fetch, options?.autoFetch, options?.params]); // Ejecuta este efecto cuando cambian las dependencias.

  // Devuelve el estado del hook y la función `fetch` para realizar solicitudes manuales.

  return { loading, data, error, fetch }; // Retorna el estado de carga, los datos, el error y la función `fetch`.
};
