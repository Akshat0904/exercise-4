import Image from "next/image";
import RoomDetail from "../roomDetails/RoomDetail";

interface IProps {
  url: string;
  propertyTitle: string;
  propertyPrice: string;
  propertyDescription: string;
  bedRooms: string;
  bathRooms: string;
  carSpaces: string;
}

const PropertyCard = ({
  url,
  propertyTitle,
  propertyPrice,
  propertyDescription,
  bedRooms,
  bathRooms,
  carSpaces,
}: IProps) => {
  return (
    <div className="flex flex-col md:flex-row border p-4 rounded-lg shadow-at-4 mb-4 md:justify-between md:items-end">
      <div className="flex flex-row mb-4 md:mb-0">
        <div className="flex justify-center items-center">
          <div className="w-20 h-20  relative bg-at-primary-50 rounded-lg overflow-hidden">
            <Image src={url} alt="Icon" className="rounded-lg" fill />
          </div>
        </div>
        <div className="w-full flex flex-col ml-4 justify-between">
          <p className="text-at-lg font-bold text-at-gray-500">
            {propertyTitle}
          </p>
          <p className="text-base font-normal text-at-gray-700">
            {propertyPrice}
          </p>
          <RoomDetail
            bedroom={bedRooms}
            bathroom={bathRooms}
            parking={carSpaces}
          >
            <p className="text-sm text-at-dark-700 capitalize pl-2 text-at-gray-700">
              {propertyDescription}
            </p>
          </RoomDetail>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
