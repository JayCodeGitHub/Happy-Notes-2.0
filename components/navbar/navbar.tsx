import Link from "next/link";
import NavLink from "../navlink/navlink";
import { NavigationItems } from "@/assets/items/navigationItems";
import Hamburger from "../hamburger/hamburger";
import MobileMenu from "../mobileMenu/mobileMenu";
import GitHubButton from "../githubButton/githubButton";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between w-full h-20 px-6 overflow-hidden text-black bg-white border-b-2 border-black dark:text-white dark:bg-gray-800 dark:border-white">
        <div className="flex items-center justify-center w-52">
          <Link href="/notes">
            <h1 className="text-xl transition-all duration-100 ease-in-out dark:hover:text-gray-500 hover:text-gray-600">
              Happy Notes
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center ">
          <ul className="hidden md:flex md:justify-between md:w-80 md:mx-8">
            {NavigationItems.map((item) => (
              <li key={item.name}>
                <NavLink href={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <div className="relative z-20">
              <Hamburger />
            </div>
            <MobileMenu />
          </div>
          <div className="hidden w-56 h-full md:flex">
            <div className="flex items-center justify-center w-1/2 h-full ">
              <GitHubButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
