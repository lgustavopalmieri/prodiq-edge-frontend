import { useState, useId } from "react";

interface ComboBoxProps<T> {
  items: T[];
  onSelect: (item: T) => void;
  placeholder?: string;
  displayValue: (item: T) => string;
}

export function ComboBox<T>({
  items,
  onSelect,
  placeholder = "Search...",
  displayValue,
}: ComboBoxProps<T>) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const filtered = items.filter((item) =>
    displayValue(item).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input
        id={id}
        type="text"
        value={query}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
      />

      {isOpen && filtered.length > 0 && (
        <ul className="absolute z-10 w-full bg-zinc-800 border border-zinc-600 mt-1 rounded max-h-48 overflow-y-auto">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-zinc-600 cursor-pointer text-white text-sm"
              onClick={() => {
                onSelect(item);
                setQuery(displayValue(item));
                setIsOpen(false);
              }}
            >
              {displayValue(item)}
            </li>
          ))}
        </ul>
      )}

      {isOpen && filtered.length === 0 && (
        <div className="absolute z-10 w-full bg-zinc-800 border border-zinc-600 mt-1 rounded text-zinc-400 px-4 py-2 text-sm">
          No matching results
        </div>
      )}
    </div>
  );
}
export default ComboBox;
