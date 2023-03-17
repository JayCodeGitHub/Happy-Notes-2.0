import Link from "next/link";
import NavLink from "../navlink/navlink";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-20 overflow-hidden dark:text-white text-black dark:bg-gray-800 bg-white flex justify-between px-6 border-b-2 dark:border-white border-black">
        <div className=" w-52 flex justify-center items-center">
          <Link href="/notes">
            <h1 className="text-xl dark:hover:text-gray-500 hover:text-gray-600 duration-100 transition-all ease-in-out">
              Happy Notes
            </h1>
          </Link>
        </div>
        <div className=" flex justify-center items-center">
          <ul className="hidden md:flex md:justify-between md:w-80 md:mx-8">
            <li>
              <NavLink href="/notes">Notes</NavLink>
            </li>
            <li>
              <NavLink href="/sites">Sites</NavLink>
            </li>
            <li>
              <NavLink href="/todo">ToDos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
