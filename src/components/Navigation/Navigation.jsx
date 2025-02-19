import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import logoutWhite from "../../images/logout.svg";
import logoutBlack from "../../images/logout-black.svg";
import { UserContext } from "../../contexts/UserContext";

export default function Navigation() {
  const { isLoggedIn, user, handleLogin, handleLogout } =
    useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getClass = (baseClass) => {
    return location.pathname === "/saved-news"
      ? `${baseClass} ${baseClass}_saved-news`
      : baseClass;
  };

  const logout =
    location.pathname === "/saved-news" ? logoutBlack : logoutWhite;

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  function handleClick(e) {
    e.preventDefault();

    if (isLoggedIn) {
      handleLogout();
    } else {
      handleLogin();
    }
  }

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
          className={({ isActive, isPending }) =>
            isActive
              ? `${getClass("navigation__navlink")} navigation__navlink-active`
              : getClass("navigation__navlink")
          }
          to="/"
          end
        >
          Início
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? `${getClass("navigation__navlink")}  ${getClass(
                    "navigation__navlink-active"
                  )} navigation__navlink_saved`
                : `${getClass("navigation__navlink")} navigation__navlink_saved`
            }
            to="/saved-news"
          >
            Artigos salvos
          </NavLink>
        </li>
      )}
      <li>
        {isLoggedIn ? (
          <button
            className={`${getClass(
              "navigation__button"
            )} navigation__button_logout`}
            onClick={handleClick}
          >
            <>
              {user.name}{" "}
              <img className="navigation__logout-icon" src={logout} />
            </>
          </button>
        ) : (
          <button
            className="navigation__button navigation__button_signin"
            onClick={handleClick}
          >
            Entrar
          </button>
        )}
      </li>
    </ul>
  );
}
