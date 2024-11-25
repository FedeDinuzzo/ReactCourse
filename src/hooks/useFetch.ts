import { useEffect, useState } from "react";

interface Params<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// Custom Hook
export function useFetch<T>(url: string): Params<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // AbortController sirve para permitir la cancelación de una solicitud de fetch si el componente que utiliza este hook se desmonta o si el valor de la dependencia url cambia antes de que la solicitud termine.
    const controller = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, controller);

        if (!response.ok) {
          throw new Error("Error al obtener datos");
        }

        const jsonData: T = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
