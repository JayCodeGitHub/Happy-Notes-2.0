import { useState } from "react";
import Image from "next/image";
import FormSection from "../formSection/formSection";

interface AddNewItemProps {
  items: any;
  setItems: any;
  type: string;
}

export default function AddNewItem({ items, setItems, type }: AddNewItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const setVisible = () => setIsVisible(!isVisible);
  return (
    <>
      <button
        className="fixed z-0 flex items-center justify-center w-16 h-16 bg-white border-2 border-green-500 rounded-full right-5 bottom-5 dark:bg-green-400 dark:border-0"
        onClick={setVisible}
      >
        <Image alt="Add new note Icon" src="/plus.svg" />
      </button>
      <FormSection
        items={items}
        setItems={setItems}
        type={type}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
}
