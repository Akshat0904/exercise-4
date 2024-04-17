import Input from "@/src/shared/component/form/Input";
import Select from "@/src/shared/component/form/Select";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { IInputValues } from "@/src/shared/component/form/Input";
import Button from "@/src/shared/component/button/Button";

const RedeemForm = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IInputValues>();

  const onSubmit = (data: IInputValues) => {
    console.log("submit", data);
  };

  return (
    <div className="pb-6 rounded-xl font-dmSans text-at lg:right-0 lg:top-0 lg:absolute lg:w-38% border border-at-light-500">
      <p className="text-sm font-bold m-6 text-at-gray-500 ">
        Enter your details for your $220 conveyancing voucher and a free
        contract review
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="px-3 lg:px-5">
        <Input
          type="text"
          id="firstName"
          label="First name"
          inputClass={
            (errors.firstName &&
              "focus-within:border-at-red-500   border-at-red-500") ||
            ""
          }
          require
          register={register}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert" className="text-xs -mt-4 text-at-red-500">
            * First name is required
          </p>
        )}
        <Input
          type="text"
          id="lastName"
          label="Last Name"
          inputClass={
            (errors.lastName &&
              "focus-within:border-at-red-500   border-at-red-500") ||
            ""
          }
          require
          register={register}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert" className="text-xs -mt-4 text-at-red-500">
            * Last name is required
          </p>
        )}
        <Input
          type="email"
          id="emailId"
          label="Email"
          inputClass={
            (errors.emailId &&
              "focus-within:border-at-red-500   border-at-red-500") ||
            ""
          }
          require
          register={register}
        />{" "}
        {(errors.emailId?.type === "required" && (
          <p role="alert" className="text-xs -mt-4 text-at-red-500">
            * Email Id is required
          </p>
        )) ||
          (errors.emailId?.type === "pattern" && (
            <p role="alert" className="text-xs -mt-4 text-at-red-500">
              * Email Id is not valid
            </p>
          ))}
        <Input
          type="number"
          id="contactNum"
          label="Phone"
          inputClass={
            (errors.contactNum &&
              "focus-within:border-at-red-500  border-at-red-500") ||
            ""
          }
          require
          register={register}
        />
        {(errors.contactNum?.type === "required" && (
          <p role="alert" className="text-xs -mt-4 text-at-red-500">
            * Contact number is required
          </p>
        )) ||
          ((errors.contactNum?.type === "minLength" ||
            errors.contactNum?.type === "maxLength") && (
            <p role="alert" className="text-xs -mt-4 text-at-red-500">
              * Contact number must be 10 digits
            </p>
          ))}
        <Select
          id="state"
          label="state"
          require
          inputClass={
            (errors.state &&
              "focus-within:border-at-red-500 border-at-red-500") ||
            " border-at-light-700 focus-within:border-at-primary"
          }
          register={register}
          placeholder="Select your state"
          optionValues={["VIC", "NSW", "QLD"]}
        />
        {errors.state?.type === "required" && (
          <p role="alert" className="text-xs -mt-4 text-at-red-500">
            * Please select your state
          </p>
        )}
        <div className="p-1 mb-4 lg:mb-6 flex flex-col">
          <label htmlFor="message" className="font-medium text-sm">
            Comments or message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Add a message"
            className="p-2 border rounded-lg border-at-light-700 focus-within:border-at-primary outline-none ring-0 focus:ring-0 focus:outline-none "
          ></textarea>
        </div>
        <Button buttonClass="w-full font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.6665 3.83398L8.4706 8.59685C9.02158 8.98254 9.29707 9.17538 9.59672 9.25007C9.86142 9.31605 10.1383 9.31605 10.403 9.25007C10.7026 9.17538 10.9781 8.98254 11.5291 8.59685L18.3332 3.83398M5.6665 14.6673H14.3332C15.7333 14.6673 16.4334 14.6673 16.9681 14.3948C17.4386 14.1552 17.821 13.7727 18.0607 13.3023C18.3332 12.7675 18.3332 12.0674 18.3332 10.6673V5.33398C18.3332 3.93385 18.3332 3.23379 18.0607 2.69901C17.821 2.2286 17.4386 1.84615 16.9681 1.60647C16.4334 1.33398 15.7333 1.33398 14.3332 1.33398H5.6665C4.26637 1.33398 3.56631 1.33398 3.03153 1.60647C2.56112 1.84615 2.17867 2.2286 1.93899 2.69901C1.6665 3.23379 1.6665 3.93385 1.6665 5.33398V10.6673C1.6665 12.0674 1.6665 12.7675 1.93899 13.3023C2.17867 13.7727 2.56112 14.1552 3.03153 14.3948C3.56631 14.6673 4.26637 14.6673 5.6665 14.6673Z"
              stroke="#ffffff"
              fill=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="text-base font-bold pl-2">Redeem Offer</span>
        </Button>
        <p className="text-xs font-normal px-4 text-at-gray-700 text-center">
          By submitting your details, you acknowledge that you accept our{" "}
          <a
            href="/_"
            className="text-xs text-at-primary hover:underline hover:text-at-primary cursor-pointer"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
        </p>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default RedeemForm;
