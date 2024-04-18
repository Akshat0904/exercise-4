import { ReactNode, useState } from "react";
import Image from "next/image";
import black_arrow from "@/public/images/black-arrow.svg";

interface IProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const BoxAccordian = ({ title, children, className = "" }: IProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const toggleAccordian = (): void => {
    setAccordionOpen((prev) => !prev);
  };

  return (
    <div
      className={
        "shadow-md flex flex-col rounded-lg p-4 border border-at-light-500" +
        className
      }
    >
      <button
        onClick={toggleAccordian}
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <p className="text-base text-left font-bold pr-2">{title}</p>
        <span
          className={
            "text-base font-medium pb-1 transition-all duration-300 ease-in-out " +
            (accordionOpen ? "rotate-180" : "")
          }
        >
          <Image src={black_arrow} alt="arrow" width={14} height={14} />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out pr-6  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm font-normal">{children}</div>
      </div>
    </div>
  );
};

export default BoxAccordian;
