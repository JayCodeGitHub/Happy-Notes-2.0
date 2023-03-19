import { HamburgerProvider } from "../hooks/useHamburger";
import { Provider } from "react-redux";
import store from "@/state/store/store";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <HamburgerProvider>{children}</HamburgerProvider>;
    </Provider>
  );
}
