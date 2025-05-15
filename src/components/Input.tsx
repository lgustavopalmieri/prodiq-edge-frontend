import * as React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: React.HTMLInputTypeAttribute;
  label: string;
  disabledField: boolean;
  registration: UseFormRegisterReturn;
}

const Input: React.FunctionComponent<IInputProps> = ({
  type,
  label,
  disabledField,
  registration,
}: IInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-zinc-200 mb-1">
        {label.toUpperCase()}
      </label>
      <input
        {...registration}
        disabled={disabledField}
        type={type}
        className="p-2 rounded bg-zinc-600 text-zinc-200 focus:outline-none focus:ring focus:ring-zinc-500 disabled:opacity-50"
      />
    </div>
  );
};

export default Input;
