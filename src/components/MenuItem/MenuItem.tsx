import * as React from "react";
import type { LucideIcon } from "lucide-react";

interface IMenuItemProps {
  placeSide?: "left" | "right";
  textColor?: keyof typeof textColorMap;
  italic?: boolean;
  icon?: LucideIcon;
  name: string;
  options: {
    label: string;
    action: () => void;
    icon?: LucideIcon;
  }[];
}

const textColorMap = {
  zinc: {
    base: "text-zinc-200",
    hover: "hover:text-zinc-900",
  },
  slate: {
    base: "text-slate-200",
    hover: "hover:text-slate-900",
  },
  gray: {
    base: "text-gray-200",
    hover: "hover:text-gray-900",
  },
  white: {
    base: "text-white",
    hover: "hover:text-slate-800",
  },
  amber: {
    base: "text-amber-400",
    hover: "hover:text-amber-900",
  },
} as const;

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  placeSide = "left",
  textColor = "zinc",
  italic = false,
  icon: MainIcon,
  name,
  options,
}) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const colorBase = textColorMap[textColor].base;
  const colorHover = textColorMap[textColor].hover;

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-2 cursor-pointer font-medium py-5 transition ${colorBase} hover:text-amber-400 ${
          italic ? "italic" : ""
        }`}
      >
        {MainIcon && <MainIcon className="w-5 h-5" />}
        {name}
      </button>

      {open && (
        <div
          className={`absolute ${placeSide}-0 w-44 border rounded border-zinc-900 bg-zinc-900 shadow-lg z-50`}
        >
          {options.map((option, index) => {
            const OptionIcon = option.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  option.action();
                  setOpen(false);
                }}
                className={`cursor-pointer flex items-center rounded gap-2 w-full text-left px-4 py-2 text-sm font-medium ${colorBase} ${colorHover} hover:bg-amber-400 transition ${
                  italic ? "italic" : ""
                }`}
              >
                {OptionIcon && <OptionIcon className="w-4 h-4" />}
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
