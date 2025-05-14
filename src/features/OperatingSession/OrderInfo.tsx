import * as React from "react";

interface IOrderInfoProps {}

const OrderInfo: React.FunctionComponent<IOrderInfoProps> = () => {
  // Later, you'll receive these from props or WebSocket
  const produced = 30;
  const total = 1200;

  return (
    <div className="w-full bg-slate-900 rounded-md p-4 shadow-inner text-white">
      <h3 className="text-sm text-gray-400 mb-2 uppercase">Order</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
        <div className="bg-slate-800 p-2 rounded">
          <p className="text-xs text-gray-400">Current Order</p>
          <p className="text-lg font-semibold text-cyan-300">ORD-002</p>
        </div>
        <div className="bg-slate-800 p-2 rounded">
          <p className="text-xs text-gray-400">Product</p>
          <p className="text-lg font-semibold text-yellow-300">Product XYZ</p>
        </div>
        <div className="bg-slate-800 p-2 rounded">
          <p className="text-xs text-gray-400">Produced Quantity</p>
          <p className="text-lg font-semibold text-emerald-400">
            {produced} / {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
