import type { MachineStatusType } from "./machineStore";

export type StatusColorType = MachineStatusType;

export const getStatusColor = (status: StatusColorType) => {
  switch (status) {
    case "RUNNING":
      return "text-3xl font-bold bg-emerald-600 text-emerald-100";
    case "PAUSED":
      return "text-3xl font-bold bg-amber-600 text-amber-100";
    case "STOPPED":
      return "text-3xl font-bold bg-rose-600 text-rose-100";
    case "IDLE":
    default:
      return "text-3xl font-bold bg-slate-600 text-slate-100";
  }
};
