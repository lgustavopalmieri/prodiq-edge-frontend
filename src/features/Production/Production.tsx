import * as React from "react";
import CurrentProduction from "./CurrentProduction";
import ProductionSetup from "./ProductionSetup";
import Timer from "../OperatingSession/Timer";
import NotificationAlert from "../../components/Notification/NotificationAlert";
import type { NotificationColorType } from "../../styles/colors";
import ControlPanel from "./ControlPanel";

interface IProductionProps {}

const Production: React.FunctionComponent<IProductionProps> = (props) => {
  const notification = {
    alert: "stable",
    message: undefined,
  };
  return (
    <div className="w-full pt-4 pb-4">
      <div className="h-full rounded bg-zinc-800 w-full p-4 gap-4 flex flex-col">
        <CurrentProduction />
        <div>
          <ProductionSetup
            onSend={(value) => console.log(value)}
            onCancel={() => console.log()}
          />
        </div>
        <div className="rounded flex pt-4 pb-4 h-1/3 gap-8 w-full justify-between">
          <Timer elapsedTime={4310} />
          <NotificationAlert
            notification={notification.alert as NotificationColorType}
            message={undefined}
            onMessageClick={() => {
              console.log("Message clicked");
            }}
          />
        </div>
        <div className="flex h-full h-1/2 justify-between align=center">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default Production;
