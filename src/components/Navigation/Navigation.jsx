import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getClass = (baseClass) => {
    return location.pathname === "/saved-news"
      ? `${baseClass} ${baseClass}_saved-news`
      : baseClass;
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <ul className="navigation">
      <li>
        <img
          className="menu__button"
          src={isOpen ? close : menu}
          onClick={toggleMenu}
        />
      </li>
      <li>
        <NavLink
          className={(isActive) =>
            isActive
              ? `${getClass("navigation__navlink")} navigation__navlink-active`
              : getClass("navigation__navlink")
          }
          to="/"
        >
          Início
        </NavLink>
      </li>
      <li>
        <button className="navigation__signin">Entrar</button>
      </li>
    </ul>
  );
}
