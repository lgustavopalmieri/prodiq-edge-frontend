import * as React from "react";
import UserMenu from "../../components/UserMenu/UserMenu";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Bolt, SlidersVertical } from "lucide-react";
import { useAuthStore } from "../Authentication/authStore";

const HeaderMenu: React.FunctionComponent = () => {
  const user = useAuthStore((state) => state.user);
  if (!user) return null;
  return (
    <nav className="flex items-center gap-6 text-sm font-medium tracking-wide">
      <MenuItem
        icon={Bolt}
        name="Operations"
        options={[
          {
            label: "Add Operation",
            action: () => console.log("Add Operation"),
          },
        ]}
      />
      <MenuItem
        icon={SlidersVertical}
        name="Orders"
        options={[{ label: "Details", action: () => console.log("Details") }]}
      />
      {user?.name && <UserMenu userName={user.name} />}
    </nav>
  );
};

export default HeaderMenu;
