import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

export default function NewsCardList() {
  return (
    <div className="news-list">
      <h2 className="news-list__title">Procurar resultados</h2>
      <NewsCard />
      <button className="news-list__button">Mostrar mais</button>
    </div>
  );
}
