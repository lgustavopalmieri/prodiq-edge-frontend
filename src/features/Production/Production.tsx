import * as React from "react";
import CurrentProduction from "./CurrentProduction";
import Input from "../../components/Input";
import ProductionSetup from "./ProductionSetup";

interface IProductionProps {}

const Production: React.FunctionComponent<IProductionProps> = (props) => {
  return (
    <div className="w-full pt-4 pb-4">
      <div className="h-full rounded bg-zinc-800 w-full p-4 gap-4 flex flex-col">
        <CurrentProduction />
        <div>
          <ProductionSetup
            onSend={(value) => console.log(value)}
            onCancel={() => console.log()}
          />
        </div>
      </div>
    </div>
  );
};

export default Production;
