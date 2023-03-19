import { useHamburger } from "@/hooks/useHamburger";
import { motion, useReducedMotion } from "framer-motion";
import NavLink from "../navlink/navlink";
import { NavigationItems } from "@/assets/items/navigationItems";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import GitHubButton from "../githubButton/githubButton";

const variants = {
  open: { x: 0, display: "flex" },
  closed: { x: "100%", display: "none" },
};

export default function MobileMenu() {
  const { isOpen, toggleIsOpen } = useHamburger();
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  let state = "closed";
  if (isOpen) {
    state = "open";
  } else {
    state = "closed";
  }
  return (
    <motion.div
      animate={state}
      variants={variants}
      transition={transition}
      className="absolute top-0 right-0 z-10 flex flex-col justify-between w-3/5 h-full pt-40 bg-white border-l-2 border-black dark:bg-gray-800 dark:border-white"
    >
      <div className="flex flex-col items-center justify-around w-full h-48">
        {NavigationItems.map((item) => (
          <NavLink href={item.href} key={item.name} onClick={toggleIsOpen}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-center w-full h-28">
          <DarkModeToggle />
        </div>
        <div className="flex items-center justify-center w-full h-28">
          <GitHubButton />
        </div>
      </div>
    </motion.div>
  );
}
