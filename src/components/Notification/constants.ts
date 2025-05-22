import { AlertTriangle, Info, ShieldCheck, XCircle, type LucideIcon } from "lucide-react";

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
