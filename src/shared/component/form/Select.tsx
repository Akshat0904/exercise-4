import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IInputValues } from "./Input";

interface IProps {
  id: keyof IInputValues;
  placeholder?: string;
  label?: string;
  optionValues: string[];
  inputClass?: string;
  require?: boolean;
  register: UseFormRegister<IInputValues>;
  error?: string;
}

const Select = ({
  id,
  optionValues,
  label,
  placeholder,
  require,
  inputClass,
  register,
  error,
}: IProps): JSX.Element => {
  return (
    <>
      <div className={"p-1 font-dmSans text-at-gray-50 mb-4"}>
        {label && (
          <label htmlFor={id} className="font-medium text-sm">
            {label}
            {require && <span className="text-at-red-500">*</span>}
          </label>
        )}
        <select
          id={id}
          {...register(id, { required: `* ${label} is required` })}
          className={
            "p-2 border bg-white rounded-lg w-full outline-none ring-0 focus:ring-0 focus:outline-none" +
            inputClass
          }
        >
          {placeholder && (
            <option disabled selected value="">
              {placeholder}
            </option>
          )}
          {optionValues.map((optionValue) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p role="alert" className="text-xs -mt-4 mb-2  text-at-red-500">
          {error}
        </p>
      )}
    </>
  );
};

export default Select;
