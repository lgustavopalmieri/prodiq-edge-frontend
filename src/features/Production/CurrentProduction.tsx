import * as React from "react";
import ProductionInfo from "./ProductionInfo";

interface ICurrentProductionProps {}

const CurrentProduction: React.FunctionComponent<ICurrentProductionProps> = (
  props
) => {
  return (
    <div className="p-4 rounded border border-zinc-400 bg-zinc-800">
      <div className="flex justify-between">
        <ProductionInfo label="CURRENT OPERATION" value="round STAMP" />
        <ProductionInfo label="CURRENT ORDER" value="020555" />
        <ProductionInfo label="PRODUCT" value="copper circle" />
        <ProductionInfo label="PRODUCED/ QUANTITY" value="30/ 1000" />
      </div>
    </div>
  );
};

export default CurrentProduction;
