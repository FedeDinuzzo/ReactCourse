import axios from "axios";
import { Character, UseApiCall } from "../models";
import { loadAbort } from "../utilities";

const BASE_URL = "https://rickandmortyapi.com/api";

// Ejemplo Comun
export const getCharacterNormal = (id: number) => {
  return axios.get<Character>(`${BASE_URL}/character/${id}`);
};

export const getCharacter = (id: number): UseApiCall<Character, number> => {
  const controller = loadAbort();

  return {
    call: axios.get<Character>(`${BASE_URL}/character/${id}`, { signal: controller.signal }),
    controller,
  };
};

// Devuelve una promesa
export const newCharacter = (character: Character): UseApiCall<null, Character> => {
  const controller = loadAbort();
  return {
    call: axios.post<null>(`${BASE_URL}/character`, character, { signal: controller.signal }),
    controller, // axios.get returns a promise
  };
};
