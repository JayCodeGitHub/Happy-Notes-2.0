import { useAuth } from "@/hooks/useAuth";
import AuthenticatedApp from "./authenticatedApp";
import UnauthenticatedApp from "./unauthenticatedApp";

export default function Home() {
  const { user } = useAuth();
  return <>{user != null ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}
