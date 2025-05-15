import * as React from "react";

interface IProductionInfoProps {
  label: string;
  value: string | number;
}

const ProductionInfo: React.FunctionComponent<IProductionInfoProps> = ({
  label,
  value,
}) => {
  const getValue = (value: string | number) => {
    if (typeof value === "number") return Number(value);
    return value.toUpperCase();
  };
  return (
    <div className="flex flex-col">
      <span className="text-xs text-zinc-400">{label.toUpperCase()}</span>
      <span className="text-2xl font-semibold text-zinc-300">
        {getValue(value)}
      </span>
    </div>
  );
};

export default ProductionInfo;
