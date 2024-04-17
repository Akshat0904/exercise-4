import React, { ReactNode } from "react";

interface IProps {
  parentDivClass?: string;
  heading: string;
  subHeading?: string;
  subHeadingClass?: string;
  children?: ReactNode;
}

const HeroSection: React.FC<IProps> = ({
  parentDivClass = "",
  heading,
  subHeading,
  subHeadingClass = "",
  children,
}): JSX.Element => {
  return (
    <div
      className={
        "p-6 md:px-16 md:py-12 z-0 bg-at-primary-50 text-at-gray-500 rounded-xl w-full md:pr-72 relative " +
        parentDivClass
      }
    >
      <div>
        <h1 className="text-at-5xl font-bold font-golos lg:text-at-7xl break-words ">
          {heading}
        </h1>
        {subHeading && (
          <p
            className={
              "text-sm font-normal font-dmSans text-at-gray-700 md:text-base mt-4 " +
              subHeadingClass
            }
          >
            {subHeading}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default HeroSection;
