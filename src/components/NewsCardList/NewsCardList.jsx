import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

export default function NewsCardList() {
  const { newsList } = useContext(SearchContext);

  return (
    <div className="news-list">
      <h2 className="news-list__title">Procurar resultados</h2>

      <div className="news-list__content">
        {newsList.map((news) => (
          <NewsCard key={news.url} news={news} />
        ))}
      </div>

      <button className="news-list__button">Mostrar mais</button>
    </div>
  );
}
