import "./Navigation.css";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import logoutWhite from "../../images/logout.svg";
import logoutBlack from "../../images/logout-black.svg";
import { UserContext } from "../../contexts/UserContext";
import { PopupContext } from "../../contexts/PopupContext";
import Login from "../Login/Login";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

export default function Navigation({ isMobile }) {
  const { t } = useTranslation();
  const { isLoggedIn, user, handleLogout } = useContext(UserContext);
  const { handleOpenPopup } = useContext(PopupContext);

  const location = useLocation();

  const loginPopup = { title: "Entrar", children: <Login /> };

  const getClass = (baseClass) => {
    return location.pathname === "/saved-news"
      ? `${baseClass} ${baseClass}_saved-news`
      : baseClass;
  };

  const logout =
    location.pathname === "/saved-news" && !isMobile
      ? logoutBlack
      : logoutWhite;

  function handleClick(e) {
    e.preventDefault();

    if (isLoggedIn) {
      handleLogout();
    } else {
      handleOpenPopup(loginPopup);
    }
  }

  const checkSavedNewsActive = ({ isActive }) => {
    return isActive
      ? `${getClass("navigation__navlink")} ${getClass(
          "navigation__navlink-active"
        )} navigation__navlink_saved`
      : `${getClass("navigation__navlink")} navigation__navlink_saved`;
  };

  const checkHomeActive = ({ isActive }) => {
    return isActive
      ? `${getClass("navigation__navlink")} navigation__navlink-active`
      : getClass("navigation__navlink");
  };

  return (
    <ul className="navigation">
      <li>
        <NavLink className={checkHomeActive} to="/" end>
          {t("navigation.homeButton")}
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink className={checkSavedNewsActive} to="/saved-news">
            {t("navigation.savedButton")}
          </NavLink>
        </li>
      )}
      <li className="navigation_li">
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
            {t("navigation.signinButton")}
          </button>
        )}
      </li>
    </ul>
  );
}
