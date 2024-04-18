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
import mail_open from "@/public/images/mail_open.svg";
import telephone from "@/public/images/telephone.svg";
import arrow from "@/public/images/black-arrow.svg";

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
      <HeroSection heading={title} subHeading={Address} divClass=" lg:w-3/5">
        <div className="flex flex-col mt-8 lg:flex-row justify-start lg:justify-between lg:items-center">
          <div className="flex gap-4">
            <Button buttonClass="font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700">
              <Image src={mail_open} alt="Mail icon" width={20} height={20} />
              <span className="ml-2">Enquire Now</span>
            </Button>
            <Button buttonClass="font-bold text-black bg-white border border-at-light-500 hover:border-at-gray-500  active:bg-at-light-700 disabled:opacity-50">
              <a href="/_" className="flex items-center">
                <Image src={telephone} alt="Mail icon" width={20} height={20} />
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
            title={property.title}
            price={property.priceDisplay}
            description={property.discr}
            bedRooms={property.bedrooms}
            bathRooms={property.bathrooms}
            carSpaces={property.carSpaces}
          />
        ))}
      </div>
    );
  };

  const renderInsights = (): JSX.Element => {
    return (
      <div className="border-t mt-4 pt-8 lg:mt-8">
        <div className="flex flex-col ">
          <h3 className="text-at-lg font-bold">Insights on Surrey hills</h3>
        </div>
        <div className="my-10  w-full">
          <Accordion
            title="Meet the Neighbors near Surrey hills"
            description="With luxurious 2 and 3 bedroom apartments on offer, the development is a product of years of experience by a team of Australia’s best designers. Architecture and interiors have been championed by Australia’s preeminent firm Elenberg Fraser with lush landscapes by Openwork."
            openSpanClass="rotate-180 text-[16px]"
            closeSpanClass="text-[16px]"
            divClass="px-4"
          >
            <Image src={arrow} alt="arrow" width={14} height={14} />
          </Accordion>
          <Accordion
            title="Surrey hills Suburb Trends"
            description="Positioned in one of Melbourne’s most established and leafy neighborhoods, Arbour Park introduces elevated modern living to the charming locale of Surrey Hills."
            openSpanClass="rotate-180 text-[16px]"
            closeSpanClass="text-[16px]"
            divClass="px-4"
          >
            <Image src={arrow} alt="arrow" width={14} height={14} />
          </Accordion>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <main className="p-4 xl:p-0 xl:py-8 max-w-1200 mx-auto font-dmSans">
        <section className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-8 mb-8">
          {renderHeroSection()}
          <div className="w-full lg:w-2/5 h-176 lg:h-auto relative ">
            <Image
              src="https://d126h31mg8tzcs.cloudfront.net/arbour-park/gallery/image/images-1200x5501__original.jpg"
              alt="Arbour park"
              className="rounded-lg"
              fill
            />
          </div>
        </section>
        <section className="w-full lg:w-8/12 ">
          <About
            title={title}
            address={Address}
            priceSearch={priceSearch}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            carSpaces={carSpaces}
            displayLocation={DisplayLocation}
            projectTypes={projectTypes}
            totalProperties={totalProperties}
          />
        </section>
        <section className="w-full lg:w-8/12 mt-6 lg:mt-8 border-b pb-8">
          <ShowMore
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
          {renderInsights()}
        </section>
      </main>
    </Layout>
  );
};

export default DevDetails;
