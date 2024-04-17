import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import Image from "next/image";
import RedeemForm from "@/src/module/conveyancing/component/RedeemForm";
import Faq from "@/src/module/conveyancing/component/Faq";
import Review from "@/src/module/conveyancing/component/Review";
import ShowMore from "@/src/shared/component/showmore/ShowMore";

const ConveyancingPage = () => {
  const renderHeroSection = (): JSX.Element => {
    return (
      <HeroSection
        heading="Buying or selling?"
        subHeading="Redeem your $220 conveyancing voucher and free contract review"
        parentDivClass="flex flex-col-reverse mb-8 md:block"
      >
        <a
          href="/_"
          target="_blank"
          className="w-14 h-14 mb-3 md:w-24 md:h-24 lg:w-120 lg:h-30 md:absolute md:right-15 md:top-12"
        >
          <Image
            src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/settle-easy.53aca56e.svg"
            alt="Settle Easy Logo"
            width={120}
            height={120}
          />
        </a>
      </HeroSection>
    );
  };

  const renderIFrame = (): JSX.Element => {
    return (
      <div className="bg-at-gray-500 w-full flex items-center rounded-xl overflow-hidden mb-8 h-198 lg:h-446 lg:mb-4">
        <iframe
          src="https://www.youtube.com/embed/SklG0T_W0ao"
          width="100%"
          height="98%"
          allowFullScreen
          title="Youtube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    );
  };

  const renderOfferDetails = (): JSX.Element => {
    return (
      <div className="mb-8 lg:mb-16 text-at-gray-500">
        <p className="text-base font-normal mb-4">
          In partnership with view.com.au,{" "}
          <a
            href="/_"
            target="_blank"
            className="text-base text-at-gray-500 underline hover:underline hover:text-at-primary cursor-pointer"
          >
            Settle Easy{" "}
          </a>
          is currently offering new customers a $220 conveyancing voucher on
          their trusted{" "}
          <a
            href="/_"
            target="_blank"
            className="text-base text-at-gray-500 underline hover:underline hover:text-at-primary cursor-pointer"
          >
            online conveyancing services{" "}
          </a>
          and a free contract review. You&apos;ll only pay $880 incl. GST plus
          disbursements on a standard conveyancing transaction. Redeem today and
          use within 12 months.
        </p>
        <p className="text-base font-normal mb-4">
          Settle Easy provides reliable, secure, fast and hassle-free
          conveyancing services to help you buy or sell property.
        </p>
        <p className="text-base font-normal mb-4">
          Think of Settle Easy as a legal expert in your corner. Someone to
          guide you through the process and to provide you with a seamless
          experience in the lead up to settlement.
        </p>
        <p className="text-base font-normal mb-4">
          Alongside the $220 conveyancing voucher, you will also be eligible for
          a free contract review during your conveyancing transaction, knowing
          no surprises are waiting.
        </p>
        <p className="text-base font-normal mb-4">
          Simply fill out the form and a member from the Settle Easy Success
          Specialist team will get in touch within 24 hours.
        </p>
        <p className="text-base font-normal mb-4">
          This offer is eligible for customers transacting in Victoria, New
          South Wales and Queensland.
        </p>
      </div>
    );
  };

  const renderReviews = (): JSX.Element => {
    return (
      <>
        <Review week={4} name="Jake Curtis">
          <ShowMore
            collapseHeight={75}
            expandHeight={96}
            expandText="Show More"
            collapseText="Show Less"
          >
            <p>
              Marie was excellent, very prompt, clear and friendly. Would
              recommend for first home buyers who want to be kept in the loop
              and shown all the steps.
            </p>
          </ShowMore>
        </Review>
        <Review week={2} name="Brendan Freeman">
          <ShowMore
            collapseHeight={75}
            expandHeight={360}
            expandText="Show More"
            collapseText="Show Less"
          >
            <p>
              We were fortunate enough to have Carley from Settle Easy help us
              with our first home purchase. We feel incredibly lucky that we had
              her to explain the different parts of the process and answer the
              many questions we had. We said to one another multiple times
              &apos;Thank god for Carley, she&apos;s incredible.&apos; It meant
              a lot that she was so forward with getting details, and advocating
              for us with the sellers and always keeping us up to date with what
              was happening. We cant thank her enough for everything she did for
              us.
            </p>
          </ShowMore>
        </Review>
        <Review week={2} name="Emma Gerts">
          <ShowMore
            collapseHeight={75}
            expandHeight={360}
            expandText="Show More"
            collapseText="Show Less"
          >
            <p>
              We are first time property buyers and were buying a block of land
              - Carley from Settle Easy was absolutely amazing from start to
              finish. She went above and beyond at every single stage of the
              process, keeping us in the loop the entire time, explaining what
              she was doing and why, making sure we understood what was
              happening. Buying a property is stressful enough, you don&apos;t
              need the extra worry of a Conveyancer that needs constant chasing.
              Incredible service!
            </p>
          </ShowMore>
        </Review>
      </>
    );
  };

  return (
    <Layout>
      <main className="max-w-1200 mx-auto">
        <section className="p-4 mx-auto xl:p-0 xl:pt-8  ">
          {renderHeroSection()}
        </section>
        <section className="lg:relative lg:gap-4  mx-auto px-4 xl:px-0 ">
          <div className="lg:w-3/5">
            {renderIFrame()}
            <RedeemForm />
            {renderOfferDetails()}
          </div>
        </section>
        <section className="w-full  mx-auto px-4 pb-4 xl:pb-8 xl:px-0">
          <Faq />
        </section>
        <section className="w-full mx-auto bg-at-light-200 lg:rounded-xl mb-8 lg:mb-14 font-dmSans">
          <div className="flex flex-col">
            <h3 className="text-base font-bold mx-4 mt-6 mb-4 lg:pl-10 lg:mx-0  lg:text-xl lg:mt-10 lg:mb-6">
              What Settle Easy customers are saying...
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 pb-6 lg:px-10 lg:pb-10">
            {renderReviews()}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ConveyancingPage;
