import { z } from "zod";

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
