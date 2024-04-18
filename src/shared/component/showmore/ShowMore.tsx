import React, { ReactNode, useState } from "react";
import Image from "next/image";
import arrow from "@/public/images/arrow.svg";

interface IProps {
  collapseHeight: number;
  children: ReactNode;
  blur?: boolean;
  expandText: string;
  collapseText: string;
}

const ShowMore: React.FC<IProps> = ({
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
          maxHeight: showMore ? `fit-content` : `${collapseHeight}px`,
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
          <Image src={arrow} alt="Mail icon" width={14} height={14} />
        </span>
      </button>
    </div>
  );
};

export default ShowMore;
