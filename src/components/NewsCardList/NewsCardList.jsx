import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardHeader from "../NewsCardHeader/NewsCardHeader";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext, useState } from "react";

export default function NewsCardList() {
  const { newsList, bookmarkedList } = useContext(SearchContext);
  const [visibleNews, setVisibleNews] = useState(3);

  function handleClick() {
    setVisibleNews((prev) => prev + 3);
  }

  const isSaved = (url) => {
    return bookmarkedList.some((bookmarked) => {
      return bookmarked.url === url;
    });
  };

  return (
    <div className="news-list">
      <h2 className="news-list__title">Procurar resultados</h2>

      <div className="news-list__content">
        {newsList.slice(0, visibleNews).map((news) => (
          <NewsCard key={news.url} news={news}>
            <NewsCardHeader isSaved={isSaved(news.url)} />
          </NewsCard>
        ))}
      </div>

      {visibleNews < newsList.length && (
        <button className="news-list__button" onClick={handleClick}>
          Mostrar mais
        </button>
      )}
    </div>
  );
}
