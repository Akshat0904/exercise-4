import Image from "next/image";
import mail_open from "@/public/images/mail_open.svg";
import telephone from "@/public/images/telephone.svg";
import Button from "@/src/shared/component/button/Button";
import Layout from "@/src/shared/component/layout/Layout";
import ShowMore from "@/src/shared/component/showmore/ShowMore";
import About from "@/src/module/developmentDetail/components/About";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import BoxAccordian from "@/src/shared/component/accordian/BoxAccordian";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import PropertyCard from "@/src/shared/component/propertyCard/PropertyCard";
import LocationDetails from "@/src/module/developmentDetail/components/Location";
import { IAboutProperties } from "@/src/module/developmentDetail/components/About";
import { IDevDetails } from "@/src/module/developmentDetail/developmentDetail.interface";
import { SOCIAL_MEDIA_LINKS } from "@/src/module/developmentDetail/developmentDetail.constants";
import DevelopmentDetailsSeo from "@/src/module/developmentDetail/components/seo/DevelopmentDetailsSeo";

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
  if (props.error) {
    return <p>{props.error!.message}</p>;
  }

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
    image,
  } = props.devDetail;

  const Address: string = `${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}, ${address.state} ${address.postalCode}`;

  const DisplayLocation: string = `${displaySuite.address.thoroughfareNumber}     ${displaySuite.address.thoroughfare}, ${displaySuite.address.area}, ${displaySuite.address.shortenState} ${displaySuite.address.postalCode}`;

  const renderProperties = (): JSX.Element[] => {
    return properties.map((property): JSX.Element => {
      let requiredProperties = {
        title: property.title,
        url: property.files.thumbnail[0].url,
        price: property.priceDisplay,
        description: property.discr,
        bedRooms: property.bedrooms,
        bathRooms: property.bathrooms,
        carSpaces: property.carSpaces,
      };

      return (
        <PropertyCard key={property.title} property={requiredProperties} />
      );
    });
  };

  const renderAboutProperties = (): JSX.Element => {
    let aboutProperties: IAboutProperties = {
      title,
      address: Address,
      priceSearch,
      bedrooms,
      bathrooms,
      carSpaces,
      displayLocation: DisplayLocation,
      projectTypes,
      totalProperties,
    };

    return <About aboutProperties={aboutProperties} />;
  };

  const renderButtons = (): JSX.Element => {
    return (
      <div className="flex gap-4">
        <Button className="font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700">
          <Image src={mail_open} alt="Mail icon" width={20} height={20} />
          <span className="ml-2">Enquire Now</span>
        </Button>
        <Button className="font-bold text-black bg-white border border-at-light-500 hover:border-at-gray-500  active:bg-at-light-700 disabled:opacity-50">
          <a href="/_" className="flex items-center">
            <Image src={telephone} alt="Mail icon" width={20} height={20} />
            <span className="ml-2 text-black">Call us</span>
          </a>
        </Button>
      </div>
    );
  };

  const renderSocialMediaLinks = (): JSX.Element => {
    return (
      <div className="flex items-center mt-4 sm:mt-0">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className="text-default cursor-pointer text-xl rounded-full bg-at-light-200 w-8 h-8 flex justify-center items-center ml-3"
          >
            <Image src={link.src!} alt={link.title} width={16} height={16} />
          </a>
        ))}
      </div>
    );
  };

  const renderHeroSection = (): JSX.Element => {
    return (
      <HeroSection heading={title} subHeading={Address} className=" lg:w-3/5">
        <div className="flex flex-col mt-8 lg:flex-row justify-start lg:justify-between lg:items-center">
          {renderButtons()}
          {renderSocialMediaLinks()}
        </div>
      </HeroSection>
    );
  };

  const renderInsights = (): JSX.Element => {
    return (
      <div className="border-t mt-4 pt-8 lg:mt-8">
        <div className="flex flex-col ">
          <h3 className="text-at-lg font-bold">Insights on Surrey hills</h3>
        </div>
        <div className="my-10 flex flex-col gap-4 w-full">
          <BoxAccordian title="Meet the Neighbors near Surrey hills">
            With luxurious 2 and 3 bedroom apartments on offer, the development
            is a product of years of experience by a team of Australia’s best
            designers. Architecture and interiors have been championed by
            Australia’s preeminent firm Elenberg Fraser with lush landscapes by
            Openwork.
          </BoxAccordian>
          <BoxAccordian title="Surrey hills Suburb Trends">
            Positioned in one of Melbourne’s most established and leafy
            neighborhoods, Arbour Park introduces elevated modern living to the
            charming locale of Surrey Hills.
          </BoxAccordian>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <DevelopmentDetailsSeo
        address={address}
        title={title}
        image={image}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
      />
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
          {renderAboutProperties()}
        </section>
        <section className="w-full lg:w-8/12 mt-6 lg:mt-8 border-b pb-8 mb-8">
          <ShowMore
            initialHeight={200}
            title="Read More"
            description="Read Less"
            blur
          >
            <div
              className="flex gap-7 flex-col"
              dangerouslySetInnerHTML={{ __html: description.textProfile }}
            />
          </ShowMore>
        </section>
        <section className="w-full lg:w-8/12">
          <h3 className="text-at-lg font-bold mb-4 text-at-gray-500">
            Off-The-Plan Residences For Sale At {title}
          </h3>
          <div className="border-b border-at-light-500 pb-8 my-8 w-full">
            {renderProperties()}
          </div>
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
