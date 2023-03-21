import { HamburgerProvider } from "../hooks/useHamburger";
import { AuthProvider } from "@/hooks/useAuth";
import { ErrorProvider } from "@/hooks/useError";
import { Provider } from "react-redux";
import store from "@/state/store/store";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <ErrorProvider>
        <AuthProvider>
          <HamburgerProvider>{children}</HamburgerProvider>;
        </AuthProvider>
      </ErrorProvider>
    </Provider>
  );
}
