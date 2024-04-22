import Button from "@/src/shared/component/button/Button";

interface IProps {
  title: string;
  address: string;
  displayLocation: string;
}

const LocationDetails = ({ title, address, displayLocation }: IProps) => {
  return (
    <>
      <h3 className="text-at-lg font-bold">Location of {title}</h3>
      <div className="w-full">
        <div className="mb-4">
          <h4 className="text-sm font-bold">Development Location</h4>
          <p className="text-xs font-normal">{address}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-bold">Display Location</h4>
          <p className="text-xs font-normal">{displayLocation}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-bold">Display Open Hours</h4>
          <p className="text-xs font-normal">Not available</p>
        </div>
        <Button buttonClass="w-full font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700">
          Request a private appointment
        </Button>
      </div>
    </>
  );
};

export default LocationDetails;

{
  /* <Modal open={isOpen}>
          <div className="fixed top-0 left-0 w-full h-full flex justify-center z-40 items-center bg-black bg-opacity-50">
            <div className="outline-none border border-at-light-500 md:py-3.5 md:px-6 rounded-xl bg-white overflow-y-auto max-h-screen overflow-auto w-full md:w-4/5 lg:w-1/2 xl:w-2/5 ">
              <form
                action=""
                className="w-full block md:max-w-[1152px] h-full md:h-376 2xl:h-auto overflow-auto "
              >
                <div className="w-full flex items-center justify-between">
                  <div className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0"></div>
                  <Image
                    src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg"
                    alt="Rev Icon"
                    width={100}
                    height={34}
                  />
                  <button
                    onClick={setModal}
                    className="w-5 h-5 md:w-7 md:h-7 noHoverEffect"
                  >
                    <Image src={cross} alt="Mail icon" width={18} height={18} />
                  </button>
                </div>
                <h3 className="text-center text-grayIcon text-lg font-medium mt-3 mb-2">
                  Enquire About {title}
                </h3>
              </form>
            </div>
            <Button onClick={setModal}>Close</Button>
          </div>
        </Modal> */
}
