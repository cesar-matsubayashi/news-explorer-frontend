import NewsCard from "../NewsCard/NewsCard";
import { getLocalArticles, setLocalArticles } from "../../utils/articles";
import "./NewsCardList.css";

export default function NewsCardList() {
  const newsList = JSON.parse(getLocalArticles());

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
