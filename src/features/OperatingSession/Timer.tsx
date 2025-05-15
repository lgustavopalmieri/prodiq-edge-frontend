import * as React from "react";
import { Timer as TimerIcon } from "lucide-react";

interface ITimerProps {
  elapsedTime: number;
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${h}:${m}:${s}`;
}

const Timer: React.FunctionComponent<ITimerProps> = ({ elapsedTime }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-zinc-300 font-semibold text-2xl">
      <TimerIcon className="w-8 h-8" />
      <span>ESTIMATED {formatTime(elapsedTime)}</span>
    </div>
  );
};

export default Timer;
