// Interceptor para manejar las solicitudes y respuestas de Axios.
// Por ejemplo tokens o headers personalizados, logs, etc.
import axios, { AxiosInstance, AxiosResponse } from "axios";

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
  axiosInstance = axios.create({ baseURL });
};

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // const token = localStorage.get("token");
      // if (token) {
      //   config.headers.set("Authorization Barer: ${token}");
      // }

      console.log("Request:", config.url);
      return config;
    },
    (error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("Response:", response.config.url);
      return response;
    },
    (error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    }
  );
};

export const initAxios = () => {
  // Crear primero la instancia de axios.
  createAxios("https://rickandmortyapi.com/api");
  // Luego configurar los interceptores.
  setupInterceptors();
  return axiosInstance;
};
