import type { LucideIcon } from "lucide-react";
import * as React from "react";
import { borderClass, borderColorMap, cardBase, textColors } from "./constants";

interface IMetricsCardProps {
  color: keyof typeof borderColorMap;
  icon: LucideIcon;
  label: string;
  value: string | number;
  goal?: string | number;
}

const MetricsCard: React.FunctionComponent<IMetricsCardProps> = ({
  color,
  icon: Icon,
  label,
  value,
  goal,
}) => {
  return (
    <div
      className={`${cardBase} border-2 ${borderClass(color)}`}
      style={{ minHeight: "6rem" }}
    >
      <Icon className={`mb-2 w-10 h-10 ${textColors(color).value}`} />

      <p
        className={`text-base text-zinc-200 mb-1 font-semibold uppercase tracking-wider leading-tight`}
      >
        {label}
      </p>

      <p
        className={`text-5xl font-extrabold ${
          textColors(color).value
        } text-center leading-none`}
      >
        {value}
      </p>
      {goal !== undefined && (
        <p className="text-xs text-zinc-200 mt-1 tracking-wide italic">
          Goal: {goal}
        </p>
      )}
    </div>
  );
};

export default MetricsCard;
