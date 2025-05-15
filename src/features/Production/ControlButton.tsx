import * as React from "react";
import type { LucideIcon } from "lucide-react";

interface ControlButtonProps {
  label: string;
  icon: LucideIcon;
  color: "amber" | "rose" | "sky";
  onClick: () => void;
  disabled?: boolean;
  pulse?: boolean;
}

const colorClassMap: Record<
  ControlButtonProps["color"],
  { base: string; hover: string; disabled: string }
> = {
  amber: {
    base: "bg-amber-600",
    hover: "hover:bg-amber-700",
    disabled: "bg-amber-800",
  },
  rose: {
    base: "bg-rose-600",
    hover: "hover:bg-rose-700",
    disabled: "bg-rose-800",
  },
  sky: {
    base: "bg-sky-600",
    hover: "hover:bg-sky-700",
    disabled: "bg-sky-800",
  },
};

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
