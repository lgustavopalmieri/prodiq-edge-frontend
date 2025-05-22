import * as React from "react";
import { colorClassMap } from "../../features/OperationExecution/ProductionSetup/constants";
import type { ISetupButtonProps } from "../../features/OperationExecution/ProductionSetup/interfaces";

const SetupButton: React.FunctionComponent<ISetupButtonProps> = ({
  type,
  onClick,
  disabled = false,
  label,
  color = "zinc",
}) => {
  const { base, hover, text } = colorClassMap[color];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 px-4 rounded ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${base} ${hover}`}
    >
      <span className={`text-2xl font-semibold ${text}`}>{label}</span>
    </button>
  );
};

export default SetupButton;
