import { ReactNode } from "react";
import Accordion from "@/src/shared/component/accordian/Accordion";

export interface IFaq {
  title: string;
  description: string | ReactNode;
}
export const FAQ_DETAILS: IFaq[] = [
  {
    title: "What is conveyancing?",
    description:
      "Conveyancing is the process of moving the legal ownership of property or land from one person or entity to another.",
  },
  {
    title: "What is a conveyancer?",
    description:
      "A conveyancer is a property transfer specialist. They prepare the legal documents that form part of real estate transactions such as the purchase and sale of properties, settlements and title transfers.",
  },
  {
    title: "How much does it cost?",
    description: (
      <>
        <p className="text-sm font-normal mb-4">
          Whether you are buying or selling property, our services are set at a
          fixed price.
        </p>
        <p className="text-sm font-normal mb-4">
          {`The only cost variable relates to disbursements.`}
        </p>
        <p className="text-sm font-normal mb-4">
          {`We don't want you to be worried about the word 'disbursements' - it's
          just an everyday legal term used to describe out of pocket expenses
          and all property transactions in Australia will incur some of these.`}
        </p>
        <p className="text-sm font-normal mb-4">
          {`We'll always be upfront about your conveyancing costs, so as soon
          as you ask us to help you, we can provide you with an estimate of how
          much your disbursements are likely to be.`}
        </p>
        <p className="text-sm font-normal">
          These out of pocket costs all depend on the type of property you have
          bought or sold and where that property is located.
        </p>
      </>
    ),
  },
  {
    title: "What types of conveyancing does Settle Easy do?",
    description: (
      <>
        <p className="text-sm font-normal mb-4">
          Our experienced team specialise in all types of conveyancing
          including:
        </p>
        <ul className="list-disc pl-7 text-sm">
          <li>residential properties</li>
          <li>large scale off the plan property developments</li>
          <li>retirement village residences</li>
          <li>commercial properties</li>
          <li>properties within trust structures</li>
          <li>properties for self-managed superannuation funds (SMSFs).</li>
        </ul>
      </>
    ),
  },
  {
    title: "How will I know what's happening?",
    description: (
      <>
        <p className="text-sm font-normal mb-4">
          At Settle Easy, we are committed to keeping you updated every step of
          the way.
        </p>
        <p className="text-sm font-normal">
          As a registered customer, you will be able to track each stage of your
          transaction and you will have a dedicated conveyancer to guide you
          through the process and answer any questions you may have.
        </p>
      </>
    ),
  },
];

const Faq = (): JSX.Element => {
  return (
    <>
      <div className=" lg:w-3/5 text-at-gray-500">
        <h2 className="flex items-center text-base font-bold mb-4 lg:mb-6">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="lg:w-3/5">
        {FAQ_DETAILS.map((faqDetail, index) => (
          <Accordion
            divClass={index == 4 ? "pb-4 mb-4 border-none" : ""}
            key={faqDetail.title}
            title={faqDetail.title}
            description={faqDetail.description}
            openIcon="+"
            closeIcon="-"
          />
        ))}
      </div>
    </>
  );
};

export default Faq;
