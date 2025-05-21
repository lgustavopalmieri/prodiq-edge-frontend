import {
  type LucideIcon,
  AlertTriangle,
  Info,
  XCircle,
  ShieldCheck,
} from "lucide-react";
import type { MachineStatusType } from "../features/MachineState/machineStore";

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

export type NotificationColorType = "warning" | "critical" | "info" | "stable";

export type NotificationStyle = {
  color: string;
  icon: LucideIcon;
};

export const getNotificationColor = (
  notification: NotificationColorType
): NotificationStyle => {
  switch (notification) {
    case "stable":
      return {
        color: "bg-slate-600 text-slate-100",
        icon: ShieldCheck,
      };
    case "warning":
      return {
        color: "bg-amber-600 text-amber-100",
        icon: AlertTriangle,
      };
    case "critical":
      return {
        color: "bg-rose-600 text-rose-100",
        icon: XCircle,
      };
    case "info":
      return {
        color: "bg-sky-600 text-sky-100",
        icon: Info,
      };
    default:
      return {
        color: "bg-slate-600 text-slate-100",
        icon: ShieldCheck,
      };
  }
};
