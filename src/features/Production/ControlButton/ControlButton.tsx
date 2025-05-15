import * as React from "react";
import { colorClassMap, type ControlButtonProps } from "./constants";

const ControlButton: React.FunctionComponent<ControlButtonProps> = ({
  label,
  icon: Icon,
  color,
  onClick,
  disabled = false,
  pulse = false,
}) => {
  const { base, hover, disabled: disabledColor } = colorClassMap[color];

  const wrapperClasses = [
    "w-full py-3 px-6 rounded-lg text-white font-semibold text-3xl flex justify-center items-center gap-2 transition",
    disabled
      ? `${disabledColor} cursor-not-allowed`
      : `${base} ${hover} cursor-pointer`,
    pulse && !disabled ? "animate-pulse" : "",
  ].join(" ");

  const contentOpacity = disabled ? "opacity-30" : "opacity-100";

  return (
    <button onClick={onClick} disabled={disabled} className={wrapperClasses}>
      <Icon className={`w-10 h-10 ${contentOpacity}`} />
      <span className={contentOpacity}>{label}</span>
    </button>
  );
};

export default ControlButton;
