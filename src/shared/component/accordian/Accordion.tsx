import { useState } from "react";
import { ReactNode } from "react";

interface IProps {
  divClass?: string;
  title: string;
  openIcon: string;
  closeIcon: string;
  openSpanClass?: string;
  closeSpanClass?: string;
  description: string | ReactNode;
}

const Accordion = ({
  title,
  description,
  divClass,
  openSpanClass,
  closeSpanClass,
  openIcon,
  closeIcon,
}: IProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const toggleAccordian = (): void => {
    setAccordionOpen((prev) => !prev);
  };
  return (
    <div className={"border-b font-dmSans text-at-gray-500 " + divClass}>
      <button
        onClick={toggleAccordian}
        className="flex items-center justify-between w-full cursor-pointer py-3.5"
      >
        <p className="text-base text-left font-bold pr-2">{title}</p>
        <span
          className={
            "text-xl font-medium pb-1 " +
            (accordionOpen ? openSpanClass : closeSpanClass)
          }
        >
          {accordionOpen ? closeIcon : openIcon}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out pr-6  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm font-normal">{description}</div>
      </div>
    </div>
  );
};

export default Accordion;

{
  /* <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>     */
}
