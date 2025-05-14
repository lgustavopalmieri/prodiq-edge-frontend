import * as React from "react";
import UserMenu from "../../components/UserMenu/UserMenu";
import MenuItem from "../../components/MenuItem/MenuItem";

const HeaderMenu: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium tracking-wide">
      <MenuItem
        name="Operations"
        options={[
          { label: "Add Operation", action: () => console.log() },
          { label: "Logout", action: () => console.log("Logging out...") },
        ]}
      />
      <button className="cursor-pointer text-slate-300 hover:text-white transition">
        Orders Details
      </button>
      {/* <div className="cursor-pointer flex items-center gap-2 hover:text-white transition">
        <User2 className="w-5 h-5 text-cyan-400" />
        <span className="italic font-normal text-cyan-400">João da Silva</span>
      </div> */}
      <UserMenu />
    </nav>
  );
};

export default HeaderMenu;
