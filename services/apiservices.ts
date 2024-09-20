import { API_URL } from "./constants";

export const getAreas = async () => {
  try {
    const response = await fetch(API_URL + "/areas/");

    if (!response.ok) {
      return null;
    }
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
};
