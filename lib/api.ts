// lib/api.ts
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:1337";

export const fetchPonents = async () => {
  const response = await axios.get(
    `${API_URL}/api/ponentes/?fields[0]=namePonent&fields[1]=originPonent&populate[imagePonent][fields][0]=url`
  );
  return response.data.data; // Ajusta esto según la estructura de respuesta de tu API
};
