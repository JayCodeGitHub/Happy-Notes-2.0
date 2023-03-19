import React, { useContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  auth: boolean;
  toggleIsAuth: () => void;
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setIsAuth] = useState(false);
  const toggleIsAuth = () => {
    setIsAuth(!auth);
  };

  return (
    <AuthContext.Provider value={{ auth, toggleIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
