import React from "react";
import Nav from "./Nav";
import Rightheader from "./Rightheader";
import logoColored from "../assets/media/bucatechlogo_colored.svg";

function Header() {
  return (
    <div className="w-full h-20 sticky">
      <div className="flex justify-center items-center px-28 py-4">
        <img className="w-40" src={logoColored} alt="BucaLogo" />
        <Nav />
        <Rightheader />
      </div>
    </div>
  );
}

export default Header;
