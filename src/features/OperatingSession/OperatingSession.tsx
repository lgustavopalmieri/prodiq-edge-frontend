import * as React from "react";
import OperationInfo from "./OperationInfo";
import OrderInfo from "./OrderInfo";
import { useEffect, useState } from "react";
import ConfigForm from "./ConfigForm";
import ControlPanel from "./ControlPanel";
import Timer from "./Timer";
import FinishModal from "./FinishModal";

interface IOperatingSessionProps {}

const OperatingSession: React.FunctionComponent<IOperatingSessionProps> = (
  props
) => {
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [configSent, setConfigSent] = useState(false);
  const [isOperating, setIsOperating] = useState(false);
  const [isMachineRunning, setIsMachineRunning] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // mock timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMachineRunning) {
        setElapsedTime((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isMachineRunning]);

  return (
    <div className="flex flex-col h-full w-full bg-slate-800 gap-4 p-4">
      <OperationInfo />
      <OrderInfo />
      <div className="flex flex-col bg-slate-700 p-4 rounded-md gap-3 flex-grow overflow-y-auto">
        <ConfigForm
          onCancel={() => setIsConfiguring(false)}
          onSend={() => {
            setConfigSent(true);
            setIsConfiguring(false);
            setIsOperating(true);
          }}
        />

        <div>
          <Timer elapsedTime={elapsedTime} />
          <ControlPanel
            isRunning={isMachineRunning}
            isPaused={!isMachineRunning && isOperating}
            onStart={() => setIsMachineRunning(true)}
            onPause={() => setIsMachineRunning(false)}
            onStop={() => setShowFinishModal(true)}
          />
        </div>
      </div>

      {showFinishModal && (
        <FinishModal
          onConfirm={() => {
            setIsConfiguring(false);
            setConfigSent(false);
            setIsOperating(false);
            setIsMachineRunning(false);
            setShowFinishModal(false);
          }}
          onCancel={() => setShowFinishModal(false)}
        />
      )}
    </div>
  );
};

export default OperatingSession;
