import * as React from "react";
import Input from "../../components/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IProductionSetupProps {
  onSend: (data: ConfigFormData) => void;
  onCancel: () => void;
}

const schema = z.object({
  operation: z.string().min(1, "Operation  is required"),
  quantityPerCycle: z.number().positive("Quantity per cycle must be positive"),
  standardCycleTime: z
    .number()
    .positive("Standard cycle time must be positive"),

  order: z.string().min(1, "Order  is required"),
  product: z.string().min(1, "Product  is required"),
  orderQuantity: z.number().positive("Order quantity must be positive"),
});

type ConfigFormData = z.infer<typeof schema>;

const ProductionSetup: React.FunctionComponent<IProductionSetupProps> = ({
  onSend,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ConfigFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  
  const disabledFields = false;
  const onSubmit = (data: ConfigFormData) => {
    onSend(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-700 p-4 rounded-md shadow">
        <Input
          type={"text"}
          label={"operation"}
          disabledField={disabledFields}
          registration={register("operation")}
        />
        <Input
          type={"text"}
          label={"order"}
          disabledField={disabledFields}
          registration={register("order")}
        />
        <Input
          type={"number"}
          label={"quantity Per Cycle"}
          disabledField={disabledFields}
          registration={register("quantityPerCycle", { valueAsNumber: true })}
        />
        <Input
          type={"text"}
          label={"product"}
          disabledField={disabledFields}
          registration={register("product")}
        />
        <Input
          type={"number"}
          label={"standard cycle time (in seconds)"}
          disabledField={disabledFields}
          registration={register("standardCycleTime", { valueAsNumber: true })}
        />
        <Input
          type={"number"}
          label={"order quantity"}
          disabledField={disabledFields}
          registration={register("orderQuantity", { valueAsNumber: true })}
        />

        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer bg-zinc-800 hover:bg-zinc-900 py-2 px-4 rounded w-full"
        >
          <span className="text-2xl font-semibold text-zinc-300">
            CLEAN SETUP
          </span>
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className="cursor-pointer bg-sky-800 hover:bg-sky-900 py-2 px-4 rounded w-full"
        >
          <span className="text-2xl font-semibold text-sky-300">
            CONFIRM SETUP
          </span>
        </button>
      </div>
    </form>
  );
};

export default ProductionSetup;
