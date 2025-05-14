import * as React from "react";
import { BarChart, ShieldCheck, Clock, Orbit } from "lucide-react";

interface IOeeSessionProps {}

const OeeSession: React.FunctionComponent<IOeeSessionProps> = () => {
  const cardBase =
    "flex flex-col justify-center items-center bg-slate-800 rounded-md shadow p-4 h-full";

  return (
    <div className="flex flex-col justify-between h-full w-full max-w-[200px] gap-4">
      {/* OEE CARD - destaque */}
      <div
        className={`${cardBase} border-2 border-cyan-500`}
        style={{ minHeight: "6rem" }}
      >
        <Orbit className="text-cyan-300 mb-2" size={45} />

        <p className="text-base text-gray-200 mb-1 font-semibold uppercase tracking-wider leading-tight">
          OEE
        </p>
        <p className="text-5xl font-extrabold text-cyan-300 text-center leading-none">
          77.0%
        </p>
      </div>

      {/* Performance */}
      <div className={cardBase} style={{ minHeight: "6rem" }}>
        <BarChart className="text-yellow-300 mb-2" size={40} />
        <p className="text-base text-gray-200 mb-1 font-semibold uppercase tracking-wider leading-tight">
          Performance
        </p>
        <p className="text-4xl font-bold text-yellow-300 text-center leading-none">
          85.1%
        </p>
      </div>

      {/* Quality */}
      <div className={cardBase} style={{ minHeight: "6rem" }}>
        <ShieldCheck className="text-emerald-400 mb-2" size={40} />
        <p className="text-base text-gray-200 mb-1 font-semibold uppercase tracking-wider leading-tight">
          Quality
        </p>
        <p className="text-4xl font-bold text-emerald-400 text-center leading-none">
          95.1%
        </p>
      </div>

      {/* Availability */}
      <div className={cardBase} style={{ minHeight: "6rem" }}>
        <Clock className="text-blue-400 mb-2" size={40} />
        <p className="text-base text-gray-200 mb-1 font-semibold uppercase tracking-wider leading-tight">
          Availability
        </p>
        <p className="text-4xl font-bold text-blue-400 text-center leading-none">
          92.3%
        </p>
      </div>
    </div>
  );
};

export default OeeSession;
