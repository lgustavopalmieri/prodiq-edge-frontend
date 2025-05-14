import * as React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface AlertSessionProps {
  status: "idle" | "warning" | "critical";
  message?: string;
}

const AlertSession: React.FunctionComponent<AlertSessionProps> = ({
  status,
  message,
}) => {
  const getColor = () => {
    switch (status) {
      case "critical":
        return "bg-red-700 text-red-200";
      case "warning":
        return "bg-yellow-600 text-yellow-100";
      default:
        return "bg-slate-800 text-slate-400";
    }
  };

  const Icon = () => {
    switch (status) {
      case "critical":
        return <AlertTriangle className="w-5 h-5 text-red-300" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-300" />;
      default:
        return <CheckCircle className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div
      className={`w-full h-[6vh] flex items-center px-4 gap-2 shadow-inner rounded-md transition-all duration-300 ${getColor()}`}
    >
      <Icon />
      <span className="text-sm font-medium">{message || "No alerts"}</span>
    </div>
  );
};

export default AlertSession;
