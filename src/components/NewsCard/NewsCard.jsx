import "./NewsCard.css";
import bookmark from "../../images/bookmark.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function NewsCard(props) {
  const { urlToImage, publishedAt, title, description, source, url } =
    props.news;

  const { isLoggedIn } = useContext(UserContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formatter.format(date);
  };

  return (
    <div className="news-card">
      <div className="news-card__bookmark-container">
        <div
          className={`news-card__signin  ${
            isHovering
              ? "news-card__signin_active"
              : "news-card__signin_inactive"
          }`}
        >
          Faça o login para salvar os artigos
        </div>

        <div
          className="news-card__bookmark"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src={bookmark}
            alt="bookmark"
            className={`news-card__bookmark-icon ${
              !isLoggedIn && "news-card__bookmark-icon_disable"
            }`}
          />
        </div>
      </div>

      <a
        className="news-card__url"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={urlToImage}
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
