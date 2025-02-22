import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import logoutWhite from "../../images/logout.svg";
import logoutBlack from "../../images/logout-black.svg";
import { UserContext } from "../../contexts/UserContext";
import { PopupContext } from "../../contexts/PopupContext";
import Login from "../Login/Login";

export default function Navigation() {
  const { isLoggedIn, user, handleLogout } = useContext(UserContext);
  const { handleOpenPopup } = useContext(PopupContext);

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const registerPopup = { title: "Entrar", children: <Login /> };

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
      handleOpenPopup(registerPopup);
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
