import React from "react";
import { UseFormRegister } from "react-hook-form";

export interface IInputValues {
  firstName: string;
  lastName: string;
  emailId: string;
  contactNum: string;
  state: string;
  message?: string;
}

interface IProps {
  type: string;
  id: keyof IInputValues;
  label?: string;
  placeholder?: string;
  require?: boolean;
  inputClass?: string;
  register: UseFormRegister<IInputValues>;
}

const Input: React.FC<IProps> = ({
  type,
  id,
  placeholder,
  require,
  label,
  inputClass,
  register,
  ...props
}): JSX.Element => {
  return (
    <div className="mb-4 font-dmSans text-at-gray-500">
      {label && (
        <label htmlFor={id} className="ml-1 font-medium text-sm">
          {label}
          {require && <span className="text-at-red-500">*</span>}
        </label>
      )}
      <div className={"border rounded-lg relative " + inputClass}>
        {(id === "emailId" && (
          <input
            type={type}
            className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
            id={id}
            placeholder={placeholder}
            {...register(id, {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            {...props}
          />
        )) ||
          (id === "contactNum" && (
            <input
              type={type}
              className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
              id={id}
              placeholder={placeholder}
              {...register(id, {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              {...props}
            />
          )) || (
            <input
              type={type}
              className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
              id={id}
              placeholder={placeholder}
              {...register(id, {
                required: true,
              })}
              {...props}
            />
          )}
      </div>
    </div>
  );
};

export default Input;

// import { UseFormRegister } from "react-hook-form";

// interface IInputValues {
//   firstName: string;
//   lastName: string;
//   emailId: string;
//   contactNum: number;
// }

// interface IProps {
//   type: string;
//   id: keyof IInputValues; // Change the type of id to keyof IInputValues
//   label?: string;
//   placeholder?: string;
//   require?: boolean;
//   register: UseFormRegister<IInputValues>;
// }

// const Input = ({ type, id, placeholder, require, label, register }: IProps) => {
//   return (
//     <div className="mb-4 font-dmSans text-at-gray-500">
//       {label && (
//         <label htmlFor={id} className="ml-1 font-medium text-sm">
//           {label}
//           {require && <span className="text-at-red-500">*</span>}
//         </label>
//       )}
// {
//   /* <div className="border rounded-lg relative focus-within:border-at-primary border-at-light-700">
//         {require ? (
//           <input
//             type={type}
//             className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
//             id={id}
//             placeholder={placeholder}
//             required
//             {...register(id)} // Pass the key of IInputValues to register
//           />
//         ) : (
//           <input
//             type={type}
//             className="w-full outline-none px-3 py-2 border-0 rounded-lg ring-0 focus:ring-0 focus:outline-none"
//             id={id}
//             placeholder={placeholder}
//             name={id}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Input; */
// }
