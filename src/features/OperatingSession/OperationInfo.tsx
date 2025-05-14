import * as React from "react";

interface IOperationInfoProps {}

const OperationInfo: React.FunctionComponent<IOperationInfoProps> = () => {
  return (
    <div className="w-full bg-slate-900 rounded-md p-4 shadow-inner text-white">
      <h3 className="text-sm text-gray-400 mb-2 uppercase">Operation</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
        <div className="bg-slate-800 p-2 rounded">
          <p className="text-xs text-gray-400">Current Operation</p>
          <p className="text-lg font-semibold text-cyan-300">OP-123</p>
        </div>
        <div className="bg-slate-800 p-2 rounded">
          <p className="text-xs text-gray-400">Quantity per Cycle</p>
          <p className="text-lg font-semibold text-yellow-300">3</p>
        </div>
        <div className="bg-slate-800 p-2 rounded">
          <p className="text-xs text-gray-400">Status</p>
          <p className="text-lg font-semibold text-emerald-400">ACTIVE</p>
        </div>
      </div>
    </div>
  );
};

export default OperationInfo;
