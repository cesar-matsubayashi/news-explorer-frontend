import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import { useContext } from "react";
import "./SavedNewsHeader.css";
import { UserContext } from "../../contexts/UserContext";
import { SearchContext } from "../../contexts/SearchContext";

export default function SavedNewsHeader() {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const { bookmarkedList } = useContext(SearchContext);

  const getOrderKeywords = (keywords) => {
    const countMap = keywords.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(countMap).sort((a, b) => countMap[b] - countMap[a]);
  };

  const formatKeywords = (keywords) => {
    const count = keywords.length;

    if (count === 0) return "";
    if (count === 1) return keywords[0];
    if (count === 2) return keywords.join(t("savedNewsHeader.keyword.join"));
    if (count === 3)
      return (
        keywords.slice(0, 2).join(", ") +
        t("savedNewsHeader.keyword.join") +
        keywords[2]
      );

    return t("savedNewsHeader.keyword.other")
      .replace("{keywords}", keywords.slice(0, 2).join(", "))
      .replace("{count}", count - 2);
  };

  const count = bookmarkedList.length;

  const quantityMessage =
    count > 1
      ? t("savedNewsHeader.quantity.plural")
      : t("savedNewsHeader.quantity.singular");
  const replacedMessage = quantityMessage
    .replace("{name}", user.name)
    .replace("{count}", count);

  const keywords = getOrderKeywords(
    bookmarkedList.map((news) => {
      return news.keyword;
    })
  );

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__text">{t("savedNewsHeader.title")}</p>
      <h1 className="saved-news-header__quantity">{replacedMessage}</h1>
      <p className="saved-news-header__keywords">
        {t("savedNewsHeader.keyword.by")} {formatKeywords(keywords)}
      </p>
    </div>
  );
}
