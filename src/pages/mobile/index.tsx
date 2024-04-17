import Image from "next/image";
import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import DownloadApp from "@/src/module/mobile/component/DownloadApp";

const MobilePage = (): JSX.Element => {
  const renderHeroSection = (): JSX.Element => {
    return (
      <HeroSection
        parentDivClass="mb-16"
        heading="Explore properties wherever and whenever you like."
        subHeading="Available on iOS and Android, the resi.uatz.view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties."
        subHeadingClass="lg:text-lg"
      >
        <div className="mt-6 lg:mt-12">
          <DownloadApp />
        </div>
      </HeroSection>
    );
  };

  const renderMobileImage = (): JSX.Element => {
    return (
      <>
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-mobile.b0d0f9f8.png"
          alt="Web App Mobile Screen"
          className="px-75 hidden lg:block lg:w-1/2 lg:pr-75 lg:text-right"
          width={450}
          height={558}
        />
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-mobile.b0d0f9f8.png"
          alt="Web App Mobile Screen"
          className="md:mx-auto px-75 block lg:hidden"
          width={836}
          height={1036}
        />
      </>
    );
  };

  const renderTabletImage = (): JSX.Element => {
    return (
      <>
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-desktop.e2b2c6d9.png"
          alt="Web App Mobile Screen"
          className="px-6 lg:pl-75 lg:pr-0 hidden lg:block lg:w-1/2 lg:text-right"
          width={605}
          height={464}
        />
        <Image
          src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-desktop.e2b2c6d9.png"
          alt="Web App Mobile Screen"
          className="md:mx-auto px-6 block lg:hidden"
          width={836}
          height={1036}
        />
      </>
    );
  };

  return (
    <Layout>
      <main>
        <section className="p-4 mx-auto z-0 xl:p-0 xl:py-8 max-w-1200 ">
          {renderHeroSection()}
          <div className="mb-16 md:mb-6 lg:flex lg:items-center lg:h-500">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-75 lg:pr-8">
              <h2 className="text-xl font-bold mb-3 lg:mb-6 text-at-gray-500">
                Save and track.
              </h2>
              <p className="text-base font-normal mb-6 text-center text-at-gray-700 lg:text-left">
                Shortlist your favorite properties to keep track of upcoming
                open for inspections and auction. Login with your
                resi.uatz.view.com.au account to sync your saved properties
                between your computer and mobile devices.
              </p>
              <div className="mb-8 px-6 lg:px-0">
                <DownloadApp />
              </div>
            </div>
            {renderMobileImage()}
          </div>
          <div className="mb-2 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:h-500">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-75 lg:pl-112">
              <h2 className="text-xl font-bold text-center mb-3 lg:mb-6 text-at-gray-500 lg:text-left">
                Search, plan and research properties.
              </h2>
              <p className="text-base font-normal mb-6 text-center text-at-gray-700 lg:text-left">
                Search any property in Australia, get price data and suburb
                information, plus points of interest.
              </p>
              <div className="mb-8 px-6 lg:px-0">
                <DownloadApp />
              </div>
            </div>
            {renderTabletImage()}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MobilePage;
