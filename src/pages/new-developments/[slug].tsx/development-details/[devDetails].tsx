import Image from "next/image";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Button from "@/src/shared/component/button/Button";
import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import { IDevDetails } from "@/src/module/developmentDetail/developmentDetail.interface";
import { SOCIAL_MEDIA_LINKS } from "@/src/module/developmentDetail/developmentDetail.constants";
import About from "@/src/module/developmentDetail/components/About";
import ShowMore from "@/src/shared/component/showmore/ShowMore";
import PropertyCard from "@/src/shared/component/propertyCard/PropertyCard";
import LocationDetails from "@/src/module/developmentDetail/components/Location";
import Accordion from "@/src/shared/component/accordian/Accordion";

const DevDetails = (props: IDevDetails) => {
  const {
    title,
    address,
    priceSearch,
    bedrooms,
    bathrooms,
    carSpaces,
    displaySuite,
    projectTypes,
    totalProperties,
    description,
    properties,
  } = props.devDetail;

  const Address: string = `${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}, ${address.state} ${address.postalCode}`;

  const DisplayLocation: string = `${displaySuite.address.thoroughfareNumber} ${displaySuite.address.thoroughfare}, ${displaySuite.address.area}, ${displaySuite.address.shortenState} ${displaySuite.address.postalCode}`;

  const renderHeroSection = (): JSX.Element => {
    return (
      <HeroSection heading={title} subHeading={Address} parentDivClass="">
        <div className="flex flex-col mt-8 lg:flex-row justify-start lg:justify-between lg:items-center">
          <div className="flex gap-4">
            <Button buttonClass="font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon"
                  d="M11.4546 2.19382L17.728 6.27149C17.9496 6.41558 18.0605 6.48762 18.1408 6.58372C18.2118 6.66879 18.2652 6.76718 18.2978 6.87314C18.3346 6.99284 18.3346 7.12503 18.3346 7.38942V13.4992C18.3346 14.8993 18.3346 15.5994 18.0622 16.1341C17.8225 16.6046 17.44 16.987 16.9696 17.2267C16.4348 17.4992 15.7348 17.4992 14.3346 17.4992H5.66797C4.26784 17.4992 3.56777 17.4992 3.03299 17.2267C2.56259 16.987 2.18014 16.6046 1.94045 16.1341C1.66797 15.5994 1.66797 14.8993 1.66797 13.4992V7.38942C1.66797 7.12503 1.66797 6.99284 1.70478 6.87314C1.73736 6.76718 1.79076 6.66879 1.86184 6.58372C1.94214 6.48762 2.05298 6.41558 2.27465 6.27149L8.548 2.19382M11.4546 2.19382C10.9286 1.85189 10.6656 1.68093 10.3822 1.61441C10.1317 1.55561 9.87095 1.55561 9.62045 1.61441C9.33705 1.68093 9.07404 1.85189 8.548 2.19382M11.4546 2.19382L17.4747 6.10687C17.7613 6.29317 17.9046 6.38631 17.9542 6.50444C17.9976 6.60766 17.9976 6.72401 17.9542 6.82724C17.9046 6.94536 17.7613 7.03851 17.4747 7.2248L11.4546 11.1379C10.9286 11.4798 10.6655 11.6507 10.3822 11.7173C10.1317 11.7761 9.87095 11.7761 9.62045 11.7173C9.33705 11.6507 9.07404 11.4798 8.548 11.1379L2.52791 7.2248C2.24131 7.03851 2.09801 6.94536 2.04837 6.82724C2.005 6.72401 2.005 6.60766 2.04837 6.50444C2.09801 6.38631 2.24131 6.29317 2.52791 6.10687L8.548 2.19382"
                  stroke="white"
                  fill=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="ml-2">Enquire Now</span>
            </Button>
            <Button buttonClass="font-bold text-black bg-white border border-at-light-500 hover:border-at-gray-500  active:bg-at-light-700 disabled:opacity-50">
              <a href="/_" className="flex items-center">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.98356 6.37779C6.56356 7.58581 7.35422 8.71801 8.35553 9.71933C9.35685 10.7206 10.4891 11.5113 11.6971 12.0913C11.801 12.1412 11.8529 12.1661 11.9187 12.1853C12.1523 12.2534 12.4392 12.2045 12.637 12.0628C12.6927 12.0229 12.7403 11.9753 12.8356 11.88C13.1269 11.5887 13.2726 11.443 13.4191 11.3478C13.9715 10.9886 14.6837 10.9886 15.2361 11.3478C15.3825 11.443 15.5282 11.5887 15.8196 11.88L15.9819 12.0424C16.4248 12.4853 16.6462 12.7067 16.7665 12.9446C17.0058 13.4175 17.0058 13.9761 16.7665 14.449C16.6462 14.6869 16.4248 14.9083 15.9819 15.3512L15.8506 15.4825C15.4092 15.9239 15.1886 16.1446 14.8885 16.3131C14.5556 16.5001 14.0385 16.6346 13.6567 16.6334C13.3126 16.6324 13.0774 16.5657 12.607 16.4322C10.0792 15.7147 7.69387 14.361 5.70388 12.371C3.7139 10.381 2.36017 7.99569 1.6427 5.46786C1.50919 4.99749 1.44244 4.7623 1.44141 4.41818C1.44028 4.03633 1.57475 3.51925 1.76176 3.18633C1.9303 2.88631 2.15098 2.66563 2.59233 2.22428L2.72369 2.09292C3.16656 1.65005 3.388 1.42861 3.62581 1.30833C4.09878 1.0691 4.65734 1.0691 5.1303 1.30832C5.36812 1.42861 5.58955 1.65005 6.03242 2.09291L6.19481 2.25531C6.48615 2.54665 6.63182 2.69231 6.72706 2.8388C7.08622 3.3912 7.08622 4.10336 6.72706 4.65576C6.63182 4.80225 6.48615 4.94791 6.19481 5.23925C6.09955 5.33451 6.05192 5.38214 6.01206 5.43782C5.87038 5.63568 5.82146 5.92256 5.88957 6.15619C5.90873 6.22193 5.93367 6.27389 5.98356 6.37779Z"
                    stroke="#000000"
                    fill=""
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-2 text-black">Call us</span>
              </a>
            </Button>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <a
                href={link.href}
                key={link.title}
                className="text-default cursor-pointer text-xl rounded-full bg-at-light-200 w-8 h-8 flex justify-center items-center ml-3"
              >
                <Image
                  src={link.src!}
                  alt={link.title}
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </div>
        </div>
      </HeroSection>
    );
  };

  const renderProperties = (): JSX.Element => {
    return (
      <div className="border-b border-at-light-500 pb-8 my-8 w-full">
        {properties.map((property) => (
          <PropertyCard
            key={property.title}
            url={property.files.thumbnail[0].url}
            propertyTitle={property.title}
            propertyPrice={property.priceDisplay}
            propertyDescription={property.discr}
            bedRooms={property.bedrooms}
            bathRooms={property.bathrooms}
            carSpaces={property.carSpaces}
          />
        ))}
      </div>
    );
  };

  const renderAccordian = (): JSX.Element => {
    return (
      <div className="border-t mt-4 pt-8 lg:mt-8">
        <div className="flex flex-col ">
          <h3 className="text-at-lg font-bold">Insights on Surrey hills</h3>
        </div>
        <div className="my-10  w-full">
          <Accordion
            title="Meet the Neighbors near Surrey hills"
            description="With luxurious 2 and 3 bedroom apartments on offer, the development is a product of years of experience by a team of Australia’s best designers. Architecture and interiors have been championed by Australia’s preeminent firm Elenberg Fraser with lush landscapes by Openwork."
            openIcon="^"
            closeIcon="^"
            openSpanClass="rotate-180 text-[16px]"
            closeSpanClass="text-[16px]"
            divClass="px-4"
          />
          <Accordion
            title="Surrey hills Suburb Trends"
            description="Positioned in one of Melbourne’s most established and leafy neighborhoods, Arbour Park introduces elevated modern living to the charming locale of Surrey Hills."
            openIcon="^"
            closeIcon="^"
            openSpanClass="rotate-180 text-[16px]"
            closeSpanClass="text-[16px]"
            divClass="px-4"
          />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <main className="p-4 xl:p-0 xl:py-8 max-w-1200 mx-auto font-dmSans">
        <section className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-8 mb-8">
          {renderHeroSection()}
        </section>
        <section className="w-full lg:w-8/12 ">
          <About
            title={title}
            address={Address}
            priceSearch={priceSearch}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            carSpaces={carSpaces}
            DisplayLocation={DisplayLocation}
            projectTypes={projectTypes}
            totalProperties={totalProperties}
          />
        </section>
        <section className="w-full lg:w-8/12 mt-6 lg:mt-8 border-b pb-8">
          <ShowMore
            expandHeight={1157}
            collapseHeight={200}
            expandText="Read More"
            collapseText="Read Less"
            blur
          >
            <div
              className="flex gap-7 flex-col"
              dangerouslySetInnerHTML={{ __html: description.textProfile }}
            ></div>
          </ShowMore>
        </section>
        <section className="w-full lg:w-8/12">
          <h3 className="text-at-lg font-bold mb-4 text-at-gray-500">
            Off-The-Plan Residences For Sale At {title}
          </h3>
          {renderProperties()}
        </section>
        <section className="w-full lg:w-8/12  text-at-gray-500 ">
          <LocationDetails
            title={title}
            address={Address}
            displayLocation={DisplayLocation}
          />
        </section>
        <section className="w-full lg:w-8/12 text-at-gray-500">
          {renderAccordian()}
        </section>
      </main>
    </Layout>
  );
};

export default DevDetails;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  let devDetailSlug;
  devDetailSlug = params!.devDetails;

  if (devDetailSlug !== "arbour-park") {
    return {
      redirect: {
        destination: "/conveyancing",
        permanent: true,
      },
    };
  }

  try {
    const data = await fetch(
      "https://run.mocky.io/v3/32bc605c-45b7-49f9-8a1a-ee8aa84d2289"
    );

    const resData = await data.json();
    const developmentDetails = await resData.props.pageProps.data
      .developmentDetail;
    return {
      props: {
        devDetail: developmentDetails,
      },
    };
  } catch (error) {
    return {
      props: {
        error: {
          message: "Error occurred while fetching data",
        },
      },
    };
  }
};
