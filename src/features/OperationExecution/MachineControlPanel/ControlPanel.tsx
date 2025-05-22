import * as React from "react";
import ControlButton from "../../../components/Buttons/ControlButton/ControlButton";
import { Pause, Play, Square } from "lucide-react";

interface IControlPanelProps {}

const ControlPanel: React.FunctionComponent<IControlPanelProps> = () => {
  return (
    <div className="w-full pt-4 pb-4">
      <div className="flex justify-between gap-8 h-full">
        <ControlButton
          label="START"
          icon={Play}
          color="sky"
          onClick={() => undefined}
          disabled={true}
          pulse={false}
        />
        <ControlButton
          label="PAUSE"
          icon={Pause}
          color="amber"
          onClick={() => undefined}
          disabled={true}
          pulse={false}
        />
        <ControlButton
          label="STOP"
          icon={Square}
          color="rose"
          onClick={() => undefined}
          disabled={true}
          pulse={false}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
