import React from "react";
import { Link } from "react-scroll";

function Nav() {
  let navigation = [
    { name: "Home", to: "home", isActive: true },
    { name: "Why Buca?", to: "why_buca", isActive: false },
    { name: "Profiles", to: "profiles", isActive: false },
    { name: "Pricing", to: "pricing", isActive: false },
    { name: "Contact", to: "contact", isActive: false },
  ];

  return (
    <ul className="hidden space-x-10 ml-8 mr-4 lg:flex items-center">
      {navigation.map((item, index) => {
        const { to, name, isActive } = item;
        return (
          <li
            key={index}
            className={`flex cursor-pointer hover:text-primary ${
              isActive && "text-primary"
            }`}
          >
            <Link activeClass="true" to={to}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
