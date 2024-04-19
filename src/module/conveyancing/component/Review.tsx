import React from "react";
import { ReactNode } from "react";
import star from "@/public/images/star.svg";
import Image from "next/image";

interface IProps {
  week: number;
  children: ReactNode;
  name: string;
}

const Review: React.FC<IProps> = ({ week, children, name }) => {
  return (
    <div className="bg-white border shadow-sm rounded-xl h-fit p-4">
      <div className="flex justify-between mb-4">
        <div className="flex gap-1 justify-center items-center">
          <Image src={star} alt="star icon" width={18} height={18} />
          <Image src={star} alt="star icon" width={18} height={18} />
          <Image src={star} alt="star icon" width={18} height={18} />
          <Image src={star} alt="star icon" width={18} height={18} />
          <Image src={star} alt="star icon" width={18} height={18} />
        </div>
        <p className="text-xs font-normal text-at-gray-700">{week} weeks ago</p>
      </div>
      {children}
      <p className="text-sm font-bold mt-4">{name}</p>
    </div>
  );
};

export default Review;
