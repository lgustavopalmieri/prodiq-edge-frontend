import * as React from "react";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SetupButton from "../../../components/Buttons/SetupButton";
import type { IProductionSetupProps } from "./interfaces";
import { schema, type ConfigFormData } from "./schema";

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

        <SetupButton
          type="button"
          onClick={onCancel}
          label="CLEAN SETUP"
          color="zinc"
        />
        <SetupButton
          type="submit"
          label="CONFIRM SETUP"
          color="sky"
          disabled={!isValid}
        />
      </div>
    </form>
  );
};

export default ProductionSetup;
