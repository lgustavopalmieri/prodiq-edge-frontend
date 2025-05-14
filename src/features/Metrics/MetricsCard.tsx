import type { LucideIcon } from "lucide-react";
import * as React from "react";

interface IMetricsCardProps {
  color: keyof typeof borderColorMap;
  icon: LucideIcon;
  label: string;
  value: string | number;
  goal?: string | number;
}

const cardBase =
  "flex flex-col justify-center items-center bg-zinc-800 rounded-md shadow p-4 h-full";

const borderColorMap: Record<string, string> = {
  sky: "border-sky-500",
  amber: "border-amber-500",
  rose: "border-rose-500",
  emerald: "border-emerald-500",
  yellow: "border-yellow-500",
};

const textColorMap: Record<string, { value: string }> = {
  sky: { value: "text-sky-300" },
  amber: { value: "text-amber-300" },
  rose: { value: "text-rose-300" },
  emerald: { value: "text-emerald-300" },
  yellow: { value: "text-yellow-300" },
};

const MetricsCard: React.FunctionComponent<IMetricsCardProps> = ({
  color,
  icon: Icon,
  label,
  value,
  goal,
}) => {
  const borderClass = borderColorMap[color] ?? "border-zinc-500";
  const textColors = textColorMap[color] ?? {
    label: "text-zinc-200",
    value: "text-zinc-300",
  };

  return (
    <div
      className={`${cardBase} border-2 ${borderClass}`}
      style={{ minHeight: "6rem" }}
    >
      <Icon className={`mb-2 w-10 h-10 ${textColors.value}`} />

      <p
        className={`text-base text-zinc-200 mb-1 font-semibold uppercase tracking-wider leading-tight`}
      >
        {label}
      </p>

      <p
        className={`text-5xl font-extrabold ${textColors.value} text-center leading-none`}
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
