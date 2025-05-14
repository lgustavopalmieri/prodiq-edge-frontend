import * as React from "react";
import MachineStatus from "./MachineStatus";
import NotificationAlert from "../../components/Notification/NotificationAlert";
import type { NotificationColorType } from "../../styles/colors";

interface IMachineStateProps {}

const MachineState: React.FunctionComponent<IMachineStateProps> = (props) => {
  const machineName = "Machine 01 stamping mode";
  const machineStatus = "running";
  const notification = {
    alert: "info",
    message: undefined,
  };
  return (
    <div className="flex h-full w-full justify-between gap-4">
      <div className="flex items-center w-3/5 gap-8">
        <span className="text-3xl font-bold text-zinc-300 whitespace-nowrap">
          {machineName.split(" ").join("-").toUpperCase()}
        </span>
        <MachineStatus status={machineStatus} />
      </div>
      <NotificationAlert
        notification={notification.alert as NotificationColorType}
        message={undefined}
        onMessageClick={() => {
          console.log("Message clicked");
        }}
      />
    </div>
  );
};

export default MachineState;
