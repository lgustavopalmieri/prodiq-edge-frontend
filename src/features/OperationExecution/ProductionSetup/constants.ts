import { z } from "zod";

export interface IProductionSetupProps {
  onSend: (data: ConfigFormData) => void;
  onCancel: () => void;
}

export const schema = z.object({
  operation: z.string().min(1, "Operation  is required"),
  quantityPerCycle: z.number().positive("Quantity per cycle must be positive"),
  standardCycleTime: z
    .number()
    .positive("Standard cycle time must be positive"),

  order: z.string().min(1, "Order  is required"),
  product: z.string().min(1, "Product  is required"),
  orderQuantity: z.number().positive("Order quantity must be positive"),
});

export type ConfigFormData = z.infer<typeof schema>;

export interface ISetupButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  color?: "zinc" | "sky" | "rose" | "emerald" | "amber";
}

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
