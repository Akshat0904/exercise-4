import Image from "next/image";
import RoomDetail from "@/src/shared/component/roomDetails/RoomDetail";

interface IProps {
  title: string;
  address: string;
  priceSearch: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  DisplayLocation: string;
  projectTypes: string;
  totalProperties: number;
}

const About = ({
  title,
  address,
  priceSearch,
  bedrooms,
  carSpaces,
  bathrooms,
  DisplayLocation,
  projectTypes,
  totalProperties,
}: IProps) => {
  return (
    <div className="flex flex-col font-dmSans text-at-gray-500">
      <p className="text-at-lg font-medium">{`About ${title}`}</p>
      <h2 className="text-at-lg font-medium mt-4 mb-2 lg:text-xl">{address}</h2>
      <p className="text-base font-normal text-at-gray-700 mb-2">{`From $${priceSearch}`}</p>
      <RoomDetail bedroom={bedrooms} bathroom={bathrooms} parking={carSpaces} />
      <div className="lg:flex border-b border-at-light-500 pb-8">
        <div className="mb-2 lg:border-r lg:border-at-light-500 lg:pr-6">
          <div className="flex gap-2 items-center mb-1">
            <svg
              width="16"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49984 15.0003L1.6665 18.3337V5.00033L7.49984 1.66699M7.49984 15.0003L13.3332 18.3337M7.49984 15.0003V1.66699M13.3332 18.3337L18.3332 15.0003V1.66699L13.3332 5.00033M13.3332 18.3337V5.00033M13.3332 5.00033L7.49984 1.66699"
                stroke="#666666"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-sm font-normal text-at-gray-700">
              Display Location
            </span>
          </div>
          <p className="text-base font-normal">{DisplayLocation}</p>
        </div>
        <div className="mb-2 lg:pl-6 lg:border-r lg:border-at-light-500 lg:pr-6">
          <div className="flex gap-2 items-center mb-1">
            <svg
              width="16"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49984 15.0003L1.6665 18.3337V5.00033L7.49984 1.66699M7.49984 15.0003L13.3332 18.3337M7.49984 15.0003V1.66699M13.3332 18.3337L18.3332 15.0003V1.66699L13.3332 5.00033M13.3332 18.3337V5.00033M13.3332 5.00033L7.49984 1.66699"
                stroke="#666666"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-sm font-normal text-at-gray-700">
              Property Type
            </span>
          </div>
          <p className="text-base font-normal">{projectTypes}</p>
        </div>
        <div className="lg:pl-6">
          <div className="flex gap-2 items-center mb-1">
            <Image
              src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/new-dev-home.a180cb61.svg"
              alt="Home Icon"
              width={14}
              height={15}
            />
            <span className="text-sm font-normal text-at-gray-700">size</span>
          </div>
          <p className="text-base font-normal">{totalProperties}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
