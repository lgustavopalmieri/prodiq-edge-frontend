import * as React from "react";
import { Activity } from "lucide-react";

const ProdIQLogo: React.FunctionComponent = () => {
  return (
    <div className="flex items-center gap-2">
      <Activity className="w-6 h-6 text-stone-400" />
      <span className="text-xl font-extrabold tracking-wide">
        <span className="text-slate-100">Prod</span>
        <span className="text-stone-400">IQ</span>
        <span className="text-stone-400">-EDGE</span>
      </span>
    </div>
  );
};

export default ProdIQLogo;
