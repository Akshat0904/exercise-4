import React, { ReactNode, useState } from "react";

interface IProps {
  expandHeight: number;
  collapseHeight: number;
  children: ReactNode;
  blur?: boolean;
  expandText: string;
  collapseText: string;
}

const ShowMore: React.FC<IProps> = ({
  expandHeight,
  collapseHeight,
  children,
  blur,
  expandText,
  collapseText,
}): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const [Blur, setBlur] = useState(blur);

  const toggleShowMore = (): void => {
    setShowMore((prev) => !prev);
    if (blur) {
      setBlur((prev) => !prev);
    }
  };

  const blurClass =
    "overflow-hidden transition-all duration-500 bg-clip-text ease-in-out text-transparent bg-gradient-to-b from-at-gray-500 to-white";

  const nonBlurClass =
    "overflow-hidden transition-all duration-500 ease-in-out";

  return (
    <div className="font-dmSans">
      <div
        className={
          (blur && ((Blur && blurClass) || nonBlurClass)) || nonBlurClass
        }
        style={{
          maxHeight: showMore ? `${expandHeight}px` : `${collapseHeight}px`,
        }}
      >
        {children}
      </div>
      <button
        className="text-at-primary text-base leading-7 mt-2 flex gap-2 items-center"
        onClick={toggleShowMore}
      >
        {showMore ? collapseText : expandText}
        <span className={(showMore && "rotate-180") || ""}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#0073CF"
              fill=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ShowMore;
