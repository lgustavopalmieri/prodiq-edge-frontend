import * as React from "react";
import MachineStatus from "./MachineStatus";

interface IMachineStateProps {}

const MachineState: React.FunctionComponent<IMachineStateProps> = (props) => {
  const machineName = "Machine 01 stamping mode";
  const machineStatus = "running";

  return (
    <div className="flex h-full w-full justify-between gap-4">
      <div className="flex items-center w-full gap-8">
        <span className="text-3xl font-bold text-zinc-300 whitespace-nowrap">
          {machineName.split(" ").join("-").toUpperCase()}
        </span>
        <MachineStatus status={machineStatus} />
      </div>
    </div>
  );
};

export default MachineState;
