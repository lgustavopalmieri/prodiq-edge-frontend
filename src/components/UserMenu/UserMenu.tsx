import { User2 } from "lucide-react";
import * as React from "react";
import MenuItem from "../MenuItem/MenuItem";

interface IUserMenuProps {
  userName: string;
}

const UserMenu: React.FunctionComponent<IUserMenuProps> = ({ userName }) => {
  return (
    <MenuItem
      textColor="stone"
      placeSide="right"
      italic
      icon={User2}
      name={userName}
      options={[
        {
          label: "Logout",
          action: () => console.log("Logout"),
        },
      ]}
    />
  );
};

export default UserMenu;
