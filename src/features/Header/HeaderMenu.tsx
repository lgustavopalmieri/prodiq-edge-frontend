import * as React from "react";
import { User2 } from "lucide-react";

const HeaderMenu: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium tracking-wide">
      <button className="cursor-pointer text-slate-300 hover:text-white transition">
        Operations
      </button>
      <button className="cursor-pointer text-slate-300 hover:text-white transition">
        Orders Details
      </button>
      <div className="cursor-pointer flex items-center gap-2 text-cyan-400 hover:text-white transition">
        <User2 className="w-5 h-5" />
        <span className="italic font-normal">João da Silva</span>
      </div>
    </nav>
  );
};

export default HeaderMenu;
