import Image from "next/image";

export default function AddNewItem() {
  return (
    <button className="fixed z-0 flex items-center justify-center w-16 h-16 bg-white border-2 border-green-500 rounded-full right-5 bottom-5 dark:bg-green-400 dark:border-0">
      <Image alt="Add new note Icon" src="/plus.svg" />
    </button>
  );
}
