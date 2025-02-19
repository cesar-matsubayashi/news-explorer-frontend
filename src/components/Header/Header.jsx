import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header
      className={
        location.pathname === "/saved-news"
          ? "header header_saved-news"
          : "header"
      }
    >
      NewsExplorer
      <Navigation />
    </header>
  );
}
