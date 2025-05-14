import * as React from "react";

interface IInputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  disabledField: boolean;
  registration: ReturnType<any>;
}

const Input: React.FunctionComponent<IInputProps> = ({
  type,
  placeholder,
  disabledField,
  registration,
}: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...registration}
      disabled={disabledField}
      className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-cyan-500 disabled:opacity-50"
    />
  );
};

export default Input;
