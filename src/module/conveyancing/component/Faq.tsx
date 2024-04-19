import { FAQ_DETAILS } from "../conveyancing.constant";
import Accordion from "@/src/shared/component/accordian/Accordion";

const Faq = (): JSX.Element => {
  const renderFaqs = (): JSX.Element => {
    return (
      <div>
        {FAQ_DETAILS.map((faqDetail, index) => (
          <Accordion
            className={index == 4 ? "pb-4 mb-4 border-none" : ""}
            key={faqDetail.title}
            title={faqDetail.title}
          >
            <div
              className="flex flex-col"
              dangerouslySetInnerHTML={{ __html: faqDetail.description }}
            ></div>
          </Accordion>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className=" lg:w-3/5 text-at-gray-500">
        <h2 className="flex items-center text-base font-bold mb-4 lg:mb-6">
          Frequently Asked Questions
        </h2>
        {renderFaqs()}
      </div>
    </>
  );
};

export default Faq;
