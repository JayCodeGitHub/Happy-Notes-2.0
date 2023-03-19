import { useAuth } from "@/hooks/useAuth";
import AuthenticatedApp from "./authenticatedApp";
import UnauthenticatedApp from "./unauthenticatedApp";

export default function Home() {
  const { auth } = useAuth();
  return <>{auth ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}
