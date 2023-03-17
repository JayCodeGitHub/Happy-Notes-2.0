import { useRouter } from "next/router";
import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const router = useRouter();
  return (
    <Link
      className={
        router.pathname == href
          ? "bg-green-600 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center dark:text-black text-white"
          : "border-2 border-green-700 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center dark:text-white text-black dark:hover:text-gray-400 hover:text-green-700 duration-100 transition-all ease-in-out"
      }
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
