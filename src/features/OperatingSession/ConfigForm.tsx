import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  orderCode: z.string().min(1, "Order code is required"),
  operationCode: z.string().min(1, "Operation code is required"),
  idealCycleTime: z.number().positive("Ideal cycle time must be positive"),
  quantityPerCycle: z.number().positive("Quantity per cycle must be positive"),
  orderQuantity: z.number().positive("Order quantity must be positive"),
});

type ConfigFormData = z.infer<typeof schema>;

interface IConfigFormProps {
  onSend: (data: ConfigFormData) => void;
  onCancel: () => void;
}

const ConfigForm: React.FunctionComponent<IConfigFormProps> = ({
  onSend,
  onCancel,
}: IConfigFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ConfigFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: ConfigFormData) => {
    onSend(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-800 p-4 rounded-md shadow"
    >
      <div className="flex flex-col">
        <label className="text-sm text-white mb-1">Order Code</label>
        <input
          {...register("orderCode")}
          type="text"
          className="p-2 rounded bg-slate-700 text-white"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-white mb-1">Order Quantity</label>
        <input
          {...register("orderQuantity", { valueAsNumber: true })}
          type="number"
          className="p-2 rounded bg-slate-700 text-white"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-white mb-1">Operation Code</label>
        <input
          {...register("operationCode")}
          type="text"
          className="p-2 rounded bg-slate-700 text-white"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-white mb-1">Ideal Cycle Time (s)</label>
        <input
          {...register("idealCycleTime", { valueAsNumber: true })}
          type="number"
          className="p-2 rounded bg-slate-700 text-white"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-white mb-1">Quantity per Cycle</label>
        <input
          {...register("quantityPerCycle", { valueAsNumber: true })}
          type="number"
          className="p-2 rounded bg-slate-700 text-white"
        />
      </div>

      <div className="col-span-full flex justify-between mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!isValid}
          className={`py-2 px-4 rounded text-white font-semibold ${
            isValid
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Configuration
        </button>
      </div>
    </form>
  );
};

export default ConfigForm;
