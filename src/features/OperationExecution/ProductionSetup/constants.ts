import type { ISetupButtonProps } from "./interfaces";

export const colorClassMap: Record<
  NonNullable<ISetupButtonProps["color"]>,
  { base: string; hover: string; text: string }
> = {
  zinc: {
    base: "bg-zinc-800",
    hover: "hover:bg-zinc-900",
    text: "text-zinc-300",
  },
  sky: {
    base: "bg-sky-800",
    hover: "hover:bg-sky-900",
    text: "text-sky-300",
  },
  rose: {
    base: "bg-rose-800",
    hover: "hover:bg-rose-900",
    text: "text-rose-300",
  },
  emerald: {
    base: "bg-emerald-800",
    hover: "hover:bg-emerald-900",
    text: "text-emerald-300",
  },
  amber: {
    base: "bg-amber-800",
    hover: "hover:bg-amber-900",
    text: "text-amber-300",
  },
};
