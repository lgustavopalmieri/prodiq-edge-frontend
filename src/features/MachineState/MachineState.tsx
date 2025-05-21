import * as React from "react";
import MachineStatus from "./MachineStatus";
import { useMachineStore } from "./machineStore";

interface IMachineStateProps {}

const MachineState: React.FunctionComponent<IMachineStateProps> = (props) => {
  const machine = useMachineStore((state) => state.machine?.machineCode);
  const machineStatus = useMachineStore((state) => state.machineStatus);
  return (
    <div className="flex h-full w-full justify-between gap-4">
      <div className="flex items-center w-full gap-8">
        <span className="text-3xl font-bold text-zinc-300 whitespace-nowrap">
          {machine?.split(" ").join("-").toUpperCase()}
        </span>
        <MachineStatus status={machineStatus || "STOPPED"} />
      </div>
    </div>
  );
};

export default MachineState;
