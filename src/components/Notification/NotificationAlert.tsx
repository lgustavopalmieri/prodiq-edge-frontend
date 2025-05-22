import * as React from "react";
import { CircleDashed } from "lucide-react";
import { getNotificationColor, type NotificationColorType } from "./constants";

interface INotificationProps {
  notification?: NotificationColorType;
  message?: string;
  onMessageClick?: () => void;
  maxMessageLength?: number;
}
const defaultMessage = "System operating normally";
const NotificationAlert: React.FunctionComponent<INotificationProps> = ({
  notification = "stable",
  message = defaultMessage,
  onMessageClick,
  maxMessageLength = 60,
}) => {
  const { color, icon: Icon } = getNotificationColor(notification);
  const formatLabel = (s: string) => s.toUpperCase();

  const truncatedMessage =
    message.length > maxMessageLength
      ? `${message.slice(0, maxMessageLength)}...`
      : message;

  return (
    <div
      className={`flex-grow flex items-center gap-8 px-4 h-full rounded-md transition-all duration-300 ${color}`}
    >
      <div className="flex items-center justify-center h-full text-2xl font-semibold">
        <Icon className="w-8 h-8 mr-2" />
        <span>{formatLabel(notification)}</span>
      </div>

      {message && (
        <div className="w-full flex justify-center">
          <button
            className="cursor-pointer flex items-center gap-2 text-base hover:text-white transition "
            onClick={onMessageClick}
          >
            <span>{truncatedMessage}</span>
            {message !== defaultMessage && <CircleDashed className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationAlert;
