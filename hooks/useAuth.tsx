import React, { useContext, useState } from "react";
import axios from "axios";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: string | null;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  register: (email: string, password: string) => void;
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const logIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`/api/auth/login/`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem("token", response.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post(`/api/auth/register/`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem("token", response.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, logIn, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
