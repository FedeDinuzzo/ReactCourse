import { AxiosResponse } from "axios"; // Importamos AxiosResponse de axios.

export interface UseApiCall<T> {
  // Interface que define la estructura esperada para cada llamada de la API.
  call: Promise<AxiosResponse<T>>; // La promesa de Axios que ejecutará la llamada a la API.
  controller: AbortController; // AbortController para cancelar solicitudes si es necesario.
}
