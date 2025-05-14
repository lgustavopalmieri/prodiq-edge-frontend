import * as React from "react";

interface IMenuItemProps {
  name: string;
  options: {
    label: string;
    action: () => void;
  }[];
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  name,
  options,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Main Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer text-zinc-300 hover:text-amber-400 font-medium py-5 transition"
      >
        {name}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 w-40 border rounded border-zinc-900 bg-zinc-900 shadow-lg z-50">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                option.action();
                setOpen(false);
              }}
              className="cursor-pointer block w-full text-left px-4 py-2 text-sm rounded text-zinc-200 hover:bg-amber-400 hover:text-zinc-900 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default MenuItem;
