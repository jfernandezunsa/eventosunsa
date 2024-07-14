// lib/api.ts
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:1337";

export const fetchPonents = async () => {
  const response = await axios.get(
    `${API_URL}/api/ponentes/?fields[0]=namePonent&fields[1]=originPonent&fields[2]=descriptionPonent&populate[imagePonent][fields][0]=url`
  );
  return response.data.data;
};

export const fetchObjetivos = async () => {
  const response = await axios.get(
    `${API_URL}/api/objetivos/?fields[0]=iconObjetivo&fields[1]=descriptionObjetivo&fields[2]=iconNameObjetivo`
  );
  return response.data.data;
};

export const fetchEjeTematico = async () => {
  const response = await axios.get(
    `${API_URL}/api/eje-tematicos/?fields[0]=ejeTematico&populate[imageEjeTematico][fields][0]=url`
  );
  return response.data.data;
};
