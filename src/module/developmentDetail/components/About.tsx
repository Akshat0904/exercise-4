import Image from "next/image";
import RoomDetail from "@/src/shared/component/roomDetails/RoomDetail";
import location from "@/public/images/location.svg";

export interface IAboutProperties {
  title: string;
  address: string;
  priceSearch: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  displayLocation: string;
  projectTypes: string;
  totalProperties: number;
}

interface IProps {
  aboutProperties: IAboutProperties;
}

const About = ({ aboutProperties }: IProps) => {
  const renderDisplayLocation = (): JSX.Element => {
    return (
      <div className="mb-2 lg:border-r lg:border-at-light-500 lg:pr-6">
        <div className="flex gap-2 items-center mb-1">
          <Image src={location} alt="Mail icon" width={18} height={18} />
          <span className="text-sm font-normal text-at-gray-700">
            Display Location
          </span>
        </div>
        <p className="text-base font-normal">
          {aboutProperties.displayLocation}
        </p>
      </div>
    );
  };

  const renderPropertyType = (): JSX.Element => {
    return (
      <div className="mb-2 lg:pl-6 lg:border-r lg:border-at-light-500 lg:pr-6">
        <div className="flex gap-2 items-center mb-1">
          <Image src={location} alt="Mail icon" width={18} height={18} />
          <span className="text-sm font-normal text-at-gray-700">
            Property Type
          </span>
        </div>
        <p className="text-base font-normal">{aboutProperties.projectTypes}</p>
      </div>
    );
  };

  const renderPropertySize = (): JSX.Element => {
    return (
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
        <p className="text-base font-normal">
          {aboutProperties.totalProperties}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col font-dmSans text-at-gray-500">
      <p className="text-at-lg font-medium">{`About ${aboutProperties.title}`}</p>
      <h2 className="text-at-lg font-medium mt-4 mb-2 lg:text-xl">
        {aboutProperties.address}
      </h2>
      <p className="text-base font-normal text-at-gray-700 mb-2">{`From $${aboutProperties.priceSearch}`}</p>
      <RoomDetail
        bedroom={aboutProperties.bedrooms}
        bathroom={aboutProperties.bathrooms}
        parking={aboutProperties.carSpaces}
      />
      <div className="lg:flex border-b border-at-light-500 pb-8">
        {renderDisplayLocation()}
        {renderPropertyType()}
        {renderPropertySize()}
      </div>
    </div>
  );
};

export default About;
