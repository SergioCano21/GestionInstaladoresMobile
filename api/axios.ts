import { TOKEN_NAME } from "@/constants/Constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN_NAME);
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch (error) {
    console.log("Error al tratar de obtener el token: ", error);
  }
  return config;
});

let handleUnauthorized: (() => void) | null = null;

export const setUnauthorizedHandler = (handler: () => void) => {
  handleUnauthorized = handler;
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await SecureStore.deleteItemAsync(TOKEN_NAME);
      handleUnauthorized?.();
    }
    if (!error.response) {
      throw new Error("Error de red o el servidor no responde");
    }
    return Promise.reject(error);
  }
);

export default api;
