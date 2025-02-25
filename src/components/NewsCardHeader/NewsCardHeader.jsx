import "./NewsCardHeader.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import bookmark from "../../images/bookmark.svg";
import bookmarked from "../../images/bookmarked.svg";

export default function NewsCardHeader({ isSaved }) {
  const { isLoggedIn } = useContext(UserContext);
  const [isHovering, setIsHovering] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(isSaved);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleBookmark = () => {
    isLoggedIn && setIsBookmarked((bookmark) => !bookmark);
  };

  return (
    <div className="news-card-header">
      <div
        className={`news-card-header__signin  ${
          isHovering && !isLoggedIn
            ? "news-card-header__signin_active"
            : "news-card-header__signin_inactive"
        }`}
      >
        Faça o login para salvar os artigos
      </div>

      <div
        className="news-card-header__bookmark"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleBookmark}
      >
        <img
          src={isLoggedIn && isBookmarked ? bookmarked : bookmark}
          alt="bookmark"
          className={`news-card-header__bookmark-icon ${
            !isLoggedIn && "news-card-header__bookmark-icon_disable"
          }`}
        />
      </div>
    </div>
  );
}
