import { useAuth } from "@/hooks/useAuth";
import { useError } from "@/hooks/useError";
import AuthenticatedApp from "./authenticatedApp";
import UnauthenticatedApp from "./unauthenticatedApp";
import ErrorMessage from "@/components/errorMessage/errorMessage";

export default function Home() {
  const { user } = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {user != null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}
