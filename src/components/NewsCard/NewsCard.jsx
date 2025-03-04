import "./NewsCard.css";

import fallback from "../../images/fallback.png";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { getKeyword } from "../../utils/news";

export default function NewsCard(props) {
  const { news, children } = props;
  const { urlToImage, publishedAt, title, description, source, url } = news;
  const { handleBookmark } = useContext(SearchContext);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formatter.format(date);
  };

  const handleSave = (e) => {
    if (e.target.className.includes("bookmark")) {
      // console.log({ ...news, keyword: getKeyword() });
      const copy = { ...news };
      copy.source = source.name;
      handleBookmark({ ...copy, keyword: getKeyword() });
    }
  };

  return (
    <div className="news-card" onClick={handleSave}>
      {children}
      <a
        className="news-card__url"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={urlToImage || fallback}
          alt="Imagem artigo"
          className="news-card__image"
        />

        <div className="news-card__info">
          <p className="news-card__published">{formatDate(publishedAt)}</p>
          <h1 className="news-card__title">{title}</h1>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source.name}</p>
        </div>
      </a>
    </div>
  );
}
