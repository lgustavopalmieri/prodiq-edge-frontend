import * as React from "react";
import ProductionInfo from "./ProductionInfo";
import { useOperationExecutionTrackingStore } from "../ProductionSetup/operationExecutionTrackingStore";

interface ICurrentProductionProps {}

const CurrentProduction: React.FunctionComponent<
  ICurrentProductionProps
> = () => {
  const currentOperation = useOperationExecutionTrackingStore(
    (state) => state.current
  );
  const currentOrderProduced = "-";
  return (
    <div className="h-full p-4 rounded border border-zinc-400 bg-zinc-800">
      <div className="flex justify-between">
        <ProductionInfo
          label="CURRENT OPERATION"
          value={String(currentOperation?.operation_code || "-")}
        />
        <ProductionInfo
          label="CURRENT ORDER"
          value={String(currentOperation?.order_code || "-")}
        />
        <ProductionInfo
          label="PRODUCT"
          value={String(currentOperation?.product_code || "-")}
        />
        <ProductionInfo
          label="PRODUCED/ QUANTITY"
          value={`${currentOrderProduced || "-"}/${
            currentOperation?.order_quantity || "-"
          }`}
        />
      </div>
    </div>
  );
};

export default CurrentProduction;
