import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const TOKEN_NAME = "access_token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logIn = async () => {
    await SecureStore.setItemAsync(TOKEN_NAME, "dummy_token");
    setIsAuthenticated(true);
  };

  const logOut = async () => {
    await SecureStore.deleteItemAsync(TOKEN_NAME);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const token = await SecureStore.getItemAsync(TOKEN_NAME);
        setIsAuthenticated(!!token);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    };
    loadAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(): AuthContextType {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return authContext;
}
