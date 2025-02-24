import { useLocation } from "react-router";
import { useContext, useState } from "react";
import menuWhite from "../../images/menu.svg";
import menuBlack from "../../images/menu-black.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import { PopupContext } from "../../contexts/PopupContext";
import { useEffect } from "react";

export default function Header() {
  const { handleOpenPopup } = useContext(PopupContext);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 544);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 544);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let headerClassName;
  let menu;

  const navigation = {
    title: "NewsExplorer",
    children: (
      <>
        <div className="header__border"></div>
        <Navigation isMobile={true} />
      </>
    ),
    isNavigation: true,
  };

  if (location.pathname === "/saved-news") {
    headerClassName = "header header_saved-news";
    menu = menuBlack;
  } else {
    headerClassName = "header";
    menu = menuWhite;
  }

  const openMenu = () => {
    handleOpenPopup(navigation);
  };

  return (
    <header className={headerClassName}>
      NewsExplorer
      {isMobile ? (
        <img className="header__menu-button" src={menu} onClick={openMenu} />
      ) : (
        <Navigation />
      )}
    </header>
  );
}
