import { HamburgerProvider } from "../hooks/useHamburger";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return <HamburgerProvider>{children}</HamburgerProvider>;
}
