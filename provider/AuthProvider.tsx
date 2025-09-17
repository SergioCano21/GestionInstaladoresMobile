import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logIn = () => {
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setIsAuthenticated(false);
  };

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
