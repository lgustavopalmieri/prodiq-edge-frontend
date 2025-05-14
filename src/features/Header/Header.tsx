import * as React from "react";
import HeaderMenu from "./HeaderMenu";
import ProdIQLogo from "../../components/ProdIQLogo";

const Header: React.FunctionComponent = () => {
  return (
    // <header className="w-full h-full flex items-center justify-between shadow-sm">
    //   <div className="flex items-center gap-6">
    //     <ProdIQLogo />
    //   </div>
    //   <HeaderMenu />
    // </header>
    <header className="h-full flex items-center justify-between shadow-sm">
      <ProdIQLogo />
      <HeaderMenu />
    </header>
  );
};

export default Header;
