import Image from "next/image";

export default function GitHubButton() {
  return (
    <a
      className="p-2 transition-all duration-100 ease-in-out border-2 border-black rounded-lg cursor-pointer dark:border-white dark:hover:border-gray-400 hover:border-gray-300"
      href="https://github.com/JayCodeGitHub/Happy-Notes-2.0"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        alt="github Icon"
        className="hidden w-6 h-6 dark:flex "
        src="/githubicon.svg"
        width={30}
        height={30}
      />
      <Image
        alt="github Icon"
        className="flex w-6 h-6 dark:hidden"
        src="/githubicondark.png"
        width={30}
        height={30}
      />
    </a>
  );
}
