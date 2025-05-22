export function getMetricCardColor(currentState: string) {
  switch (currentState) {
    case "excellent":
      return "emerald";
    case "good":
      return "sky";
    case "poor":
      return "amber";
    case "bad":
      return "rose";
    default:
      return "zinc";
  }
}

export const cardBase =
  "flex flex-col justify-center items-center bg-zinc-800 rounded-md shadow p-4 h-full";

export const borderColorMap: Record<string, string> = {
  sky: "border-sky-500",
  amber: "border-amber-500",
  rose: "border-rose-500",
  emerald: "border-emerald-500",
  yellow: "border-yellow-500",
};

export const textColorMap: Record<string, { value: string }> = {
  sky: { value: "text-sky-300" },
  amber: { value: "text-amber-300" },
  rose: { value: "text-rose-300" },
  emerald: { value: "text-emerald-300" },
  yellow: { value: "text-yellow-300" },
};

export const borderClass = (color: keyof typeof borderColorMap) =>
  borderColorMap[color] ?? "border-zinc-500";

export const textColors = (color: keyof typeof borderColorMap) =>
  textColorMap[color] ?? {
    label: "text-zinc-200",
    value: "text-zinc-300",
  };
