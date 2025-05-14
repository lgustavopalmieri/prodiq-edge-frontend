import * as React from "react";
import { Play, Pause, Square } from "lucide-react";

interface IControlPanelProps {
  isRunning: boolean;
  isPaused: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

const ControlPanel: React.FunctionComponent<IControlPanelProps> = ({
  isRunning,
  isPaused,
  onStart,
  onPause,
  onStop,
}) => {
  return (
    <div className="w-full pt-4">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {/* START */}
        <button
          onClick={onStart}
          disabled={isRunning && !isPaused}
          className={`py-3 px-6 rounded-lg text-white font-semibold text-lg flex items-center gap-2 transition ${
            isRunning && !isPaused
              ? "bg-cyan-700 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600 animate-pulse"
          }`}
        >
          <Play className="w-5 h-5" />
          Start
        </button>

        {/* PAUSE */}
        <button
          onClick={onPause}
          disabled={!isRunning || isPaused}
          className={`py-3 px-6 rounded-lg text-white font-semibold text-lg flex items-center gap-2 transition ${
            !isRunning || isPaused
              ? "bg-yellow-700 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          <Pause className="w-5 h-5" />
          Pause
        </button>

        {/* STOP */}
        <button
          onClick={onStop}
          disabled={!isPaused}
          className={`py-3 px-6 rounded-lg text-white font-semibold text-lg flex items-center gap-2 transition ${
            !isPaused
              ? "bg-red-800 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          <Square className="w-5 h-5" />
          Stop
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
