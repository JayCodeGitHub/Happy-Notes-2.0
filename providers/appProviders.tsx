import { HamburgerProvider } from "../hooks/useHamburger";
import { AuthProvider } from "@/hooks/useAuth";
import { ErrorProvider } from "@/hooks/useError";
import { Provider } from "react-redux";
import store from "@/state/store/store";
import { LoadingProvider } from "@/hooks/useLoading";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <ErrorProvider>
        <AuthProvider>
          <LoadingProvider>
            <HamburgerProvider>{children}</HamburgerProvider>;
          </LoadingProvider>
        </AuthProvider>
      </ErrorProvider>
    </Provider>
  );
}
