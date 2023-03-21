import React, { useCallback, useContext, useState } from "react";

interface HamburgerProviderProps {
  children: React.ReactNode;
}

interface ErrorContextProps {
  error: string | null;
  dispatchError: (message: string) => void;
}

const ErrorContext = React.createContext({} as ErrorContextProps);

export const ErrorProvider = ({ children }: HamburgerProviderProps) => {
  const [error, setError] = useState<string | null>(null);

  const dispatchError = useCallback((message: string) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 7000);
  }, []);

  return (
    <ErrorContext.Provider value={{ error, dispatchError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error("useAuth needs to be used inside AuthContext");
  }

  return errorContext;
};
