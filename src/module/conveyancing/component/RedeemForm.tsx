import Input from "@/src/shared/component/form/Input";
import Select from "@/src/shared/component/form/Select";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { IInputValues } from "@/src/shared/component/form/Input";
import Button from "@/src/shared/component/button/Button";
import Image from "next/image";
import mail from "@/public/images/mail.svg";

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
          <Image src={mail} alt="Mail icon" width={20} height={20} />
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
