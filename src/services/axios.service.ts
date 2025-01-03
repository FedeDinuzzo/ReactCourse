import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Variable para almacenar la instancia de Axios.
let axiosInstance: AxiosInstance;

/**
 * Crea una instancia personalizada de Axios con una URL base.
 * @param baseURL - La URL base para todas las peticiones HTTP.
 */
const createAxios = (baseURL: string) => {
  axiosInstance = axios.create({ baseURL });
};

/**
 * Configura los interceptores de Axios para:
 * 1. Modificar las solicitudes antes de enviarlas (ej: añadir un token).
 * 2. Registrar y manejar las respuestas y errores de las peticiones.
 */
const setupInterceptors = () => {
  // Interceptor de solicitudes:
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Recupera el token de localStorage y lo añade al encabezado de autorización.
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // Registro de la URL de la solicitud para depuración.
      console.log(`Request made to: ${config.url}`);
      return config;
    },
    (error) => {
      // Manejo de errores de solicitud antes de enviarlas al servidor.
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  // Interceptor de respuestas:
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Registro de la URL de la respuesta y otros datos útiles para depuración.
      console.log(`Response from ${response.config.url}:`, {
        data: response.data,
        status: response.status,
      });
      return response;
    },
    (error) => {
      // Manejo de errores en las respuestas.
      if (error.response) {
        // Registro del error con detalles cuando existe una respuesta del servidor.
        console.error(`Error ${error.response.status} from ${error.response.config.url}:`, error.response.data);
      } else {
        // Registro de errores de red o otros errores inesperados.
        console.error(`Network or other error: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
};

/**
 * Inicializa la instancia personalizada de Axios:
 * 1. Crea la instancia con una URL base.
 * 2. Configura los interceptores para solicitudes y respuestas.
 * @returns La instancia de Axios configurada.
 */
export const initAxios = () => {
  // Crear la instancia de Axios con la URL base de la API.
  createAxios("https://rickandmortyapi.com/api");
  // Configurar los interceptores para manejar solicitudes y respuestas.
  setupInterceptors();
  // Devolver la instancia configurada.
  return axiosInstance;
};
