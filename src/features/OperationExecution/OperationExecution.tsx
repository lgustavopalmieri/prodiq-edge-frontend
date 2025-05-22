import * as React from "react";
import CurrentProduction from "./CurrentExcution/CurrentProduction";
import ProductionSetup from "./ProductionSetup/ProductionSetup";
import Timer from "../../components/Timer";
import NotificationAlert from "../../components/Notification/NotificationAlert";
import ControlPanel from "./MachineControlPanel/ControlPanel";
import type { NotificationColorType } from "../../components/Notification/constants";

interface IProductionProps {}

const Production: React.FunctionComponent<IProductionProps> = () => {
  const notification = {
    alert: "stable",
    message: undefined,
  };
  return (
    <div className="w-full pt-4 pb-4">
      <div className="h-full flex flex-col">
        <div className="h-[10%]">
          <CurrentProduction />
        </div>
        <div className="h-[12%] flex p-4 gap-4">
          <Timer elapsedTime={4310} />
          <NotificationAlert
            notification={notification.alert as NotificationColorType}
            message={undefined}
            onMessageClick={() => {
              console.log("Message clicked");
            }}
          />
        </div>
        <div className="bg-zinc-800 h-[56%] flex flex-col rounded-md shadow gap-4 p-4">
          <div className="h-full bg-green-200 flex">Load Order to Produce</div>
          <ProductionSetup
            onSend={(value) => console.log(value)}
            onCancel={() => console.log()}
          />
        </div>
        <div className="h-[20%] flex mt-4 gap-4">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default Production;
