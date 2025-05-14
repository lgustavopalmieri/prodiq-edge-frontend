import { User2 } from "lucide-react";
import * as React from "react";

interface IUserMenuProps {}

const UserMenu: React.FunctionComponent<IUserMenuProps> = (props) => {
  return (
    <div className="cursor-pointer flex items-center gap-2 hover:text-white transition">
      <User2 className="w-5 h-5 text-cyan-400" />
      <span className="italic font-normal text-cyan-400">João da Silva</span>
    </div>
  );
};

export default UserMenu;
