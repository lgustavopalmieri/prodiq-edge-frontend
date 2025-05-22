import type { LucideIcon } from "lucide-react";

export interface ControlButtonProps {
  label: string;
  icon: LucideIcon;
  color: "amber" | "rose" | "sky";
  onClick: () => void;
  disabled?: boolean;
  pulse?: boolean;
}
export const colorClassMap: Record<
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
