import React, { useContext, useState } from "react";

interface HamburgerProviderProps {
  children: React.ReactNode;
}

interface HamburgerContextProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
  setIsOpenFalse: () => void;
}

const HamburgerContext = React.createContext<HamburgerContextProps>(
  {} as HamburgerContextProps
);

export const HamburgerProvider = ({ children }: HamburgerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const setIsOpenFalse = () => {
    setIsOpen(false);
  };

  return (
    <HamburgerContext.Provider value={{ isOpen, toggleIsOpen, setIsOpenFalse }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export function useHamburger() {
  const hamburger = useContext(HamburgerContext);

  return hamburger;
}
