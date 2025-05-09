import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import "./SavedNewsCardHeader.css";
import { useState } from "react";
import trash from "../../images/trash.svg";

export default function NewsCardHeader(props) {
  const { t } = useTranslation();
  const { keyword } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="saved-news-card-header">
      <div className="saved-news-card-header__keyword">{keyword}</div>
      <div
        className={`saved-news-card-header__message  ${
          isHovering
            ? "saved-news-card-header__message_active"
            : "saved-news-card-header__message_inactive"
        }`}
      >
        {t("savedNewsCardHeader.message")}
      </div>

      <div
        className="saved-news-card-header__remove"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={trash}
          alt="Remove"
          className={
            isHovering
              ? "saved-news-card-header__remove-icon_active"
              : "saved-news-card-header__remove-icon"
          }
        />
      </div>
    </div>
  );
}
