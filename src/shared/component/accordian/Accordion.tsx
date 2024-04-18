import { useState } from "react";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  title: string;
  children?: ReactNode;
}

const Accordion = ({ title, className, children }: IProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const toggleAccordian = (): void => {
    setAccordionOpen((prev) => !prev);
  };
  return (
    <div className={"border-b font-dmSans text-at-gray-500 " + className}>
      <button
        onClick={toggleAccordian}
        className="flex items-center justify-between w-full cursor-pointer py-3.5"
      >
        <p className="text-base text-left font-bold pr-2">{title}</p>
        <span className="text-xl font-medium pb-1 ">
          {accordionOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out pr-6  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm font-normal">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
