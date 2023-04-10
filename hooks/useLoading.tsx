import React, { useContext, useState } from "react";

interface LoadingProviderProps {
  children: React.ReactNode;
}

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoadingFalse: () => void;
  setIsLoadingTrue: () => void;
}

const LoadingContext = React.createContext<LoadingContextProps>(
  {} as LoadingContextProps
);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const setIsLoadingFalse = () => {
    setIsLoading(false);
  };
  const setIsLoadingTrue = () => {
    setIsLoading(true);
  };
  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoadingFalse, setIsLoadingTrue }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const hamburger = useContext(LoadingContext);

  return hamburger;
}
