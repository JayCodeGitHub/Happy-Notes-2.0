import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";

function LogOutButton() {
  const { toggleIsAuth } = useAuth();
  return (
    <Link
      href="/"
      className="flex items-center justify-center h-8 transition-all duration-100 ease-in-out bg-green-600 rounded-lg dark:bg-white w-36 md:w-20 hover:bg-green-700 dark:hover:bg-gray-400 dark:hover:text-green-200"
    >
      <button onClick={toggleIsAuth}>
        <h1 className="text-white dark:text-green-700">LogOut</h1>
      </button>
    </Link>
  );
}

export default LogOutButton;
