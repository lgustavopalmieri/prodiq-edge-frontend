import * as React from "react";
import { PlayCircle, PauseCircle, Square, Loader2 } from "lucide-react";

interface MachineStatusProps {
  status: "running" | "paused" | "stopped" | "idle";
}

const MachineStatus: React.FunctionComponent<MachineStatusProps> = ({
  status,
}) => {
  const getColor = () => {
    switch (status) {
      case "running":
        return "bg-emerald-700 text-emerald-100";
      case "paused":
        return "bg-yellow-600 text-yellow-100";
      case "stopped":
        return "bg-red-700 text-red-200";
      case "idle":
      default:
        return "bg-slate-800 text-slate-400";
    }
  };

  const formatLabel = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  return (
    <div
      className={`flex items-center px-4 gap-3 w-full shadow-inner rounded-md transition-all duration-300 ${getColor()}`}
    >
      <span className="text-base font-medium">{formatLabel(status)}</span>
    </div>
  );
};

export default MachineStatus;
