import Image from "next/image";
import React, { Children, ReactNode } from "react";

interface IProps {
  bedroom: string;
  bathroom: string;
  parking: string;
  children?: ReactNode;
}

const RoomDetail: React.FC<IProps> = ({
  bedroom,
  bathroom,
  parking,
  children,
}): JSX.Element => {
  return (
    <div className="flex mb-2 lg:mb-4 font-dmSans">
      <div className="flex items-center gap-2 pr-2 border-r border-at-light-500">
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Bedroom.4f0da04d.svg"
          alt="Bedroom Icon"
          height={16}
          width={16}
        />
        <span className="text-sm font-normal text-at-gray-700">{bedroom}</span>
      </div>
      <div className="flex items-center gap-2 px-2 border-r border-at-light-500">
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Bathtub.275ab49f.svg"
          alt="Bathtub Icon"
          height={16}
          width={16}
        />
        <span className="text-sm font-normal text-at-gray-700">{bathroom}</span>
      </div>
      <div className="flex items-center gap-2 px-2">
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/parking.4027a27b.svg"
          alt="Parking Icon"
          height={16}
          width={16}
        />
        <span className="text-sm font-normal text-at-gray-700">{parking}</span>
      </div>
      {children}
    </div>
  );
};

export default RoomDetail;
