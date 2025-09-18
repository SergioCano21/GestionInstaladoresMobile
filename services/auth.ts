import { api_login } from "@/api/auth";
import { TOKEN_NAME } from "@/constants/Constants";
import { Login } from "@/types/types";
import * as SecureStore from "expo-secure-store";

let loginHandler: (() => void) | null = null;
let logoutHandler: (() => void) | null = null;

export const setLoginHandler = (handler: () => void) => {
  loginHandler = handler;
};

export const setLogoutHandler = (handler: () => void) => {
  logoutHandler = handler;
};

export const handleLogin = async (credentials: Login) => {
  try {
    const { token } = await api_login(credentials);
    await SecureStore.setItemAsync(TOKEN_NAME, token);
    loginHandler?.();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const handleLogout = async () => {
  await SecureStore.deleteItemAsync(TOKEN_NAME);
  logoutHandler?.();
};
