import { useAuth } from "@/hooks/useAuth";

export default function UnauthenticatedApp() {
  const { toggleIsAuth } = useAuth();
  return (
    <>
      <h1>UnauthenticatedApp</h1>
      <button onClick={toggleIsAuth}>Login</button>
      <button onClick={toggleIsAuth}>Register</button>
    </>
  );
}
