import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardHeader from "../NewsCardHeader/NewsCardHeader";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext, useState } from "react";

export default function NewsCardList() {
  const { t } = useTranslation();
  const { newsList } = useContext(SearchContext);
  const [visibleNews, setVisibleNews] = useState(3);

  function handleClick() {
    setVisibleNews((prev) => prev + 3);
  }

  return (
    <div className="news-list">
      <h2 className="news-list__title">{t("newsCardList.title")}</h2>

      <div className="news-list__content">
        {newsList.slice(0, visibleNews).map((news) => (
          <NewsCard key={news.url} news={news}>
            <NewsCardHeader isBookmarked={news.isBookmarked} />
          </NewsCard>
        ))}
      </div>

      {visibleNews < newsList.length && (
        <button className="news-list__button" onClick={handleClick}>
          {t("newsCardList.button")}
        </button>
      )}
    </div>
  );
}
