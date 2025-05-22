import * as React from "react";
import { getStatusColor, type StatusColorType } from "./constants";

interface MachineStatusProps {
  status: StatusColorType;
}

const MachineStatus: React.FunctionComponent<MachineStatusProps> = ({
  status,
}) => {
  const formatLabel = (s: string) => s.toUpperCase();

  return (
    <div
      className={`flex-grow flex items-center justify-center h-full rounded-md transition-all duration-300 ${getStatusColor(
        status
      )}`}
    >
      <span>{formatLabel(status)}</span>
    </div>
  );
};

export default MachineStatus;
