import { setUnauthorizedHandler } from "@/api/axios";
import { TOKEN_NAME } from "@/constants/Constants";
import { setLoginHandler, setLogoutHandler } from "@/services/auth";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setLoginHandler(() => setIsAuthenticated(true));
    setLogoutHandler(() => setIsAuthenticated(false));
    setUnauthorizedHandler(() => setIsAuthenticated(false));
  }, []);

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
    <AuthContext.Provider value={{ isAuthenticated }}>
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
