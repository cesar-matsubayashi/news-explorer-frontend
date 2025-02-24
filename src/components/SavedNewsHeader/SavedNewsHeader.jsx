import { useContext } from "react";
import "./SavedNewsHeader.css";
import { UserContext } from "../../contexts/UserContext";
import { SearchContext } from "../../contexts/SearchContext";

export default function SavedNewsHeader() {
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
    if (count === 2) return keywords.join(" e ");
    if (count === 3)
      return keywords.slice(0, 2).join(", ") + " e " + keywords[2];

    return `${keywords.slice(0, 2).join(", ")} e ${count - 2} outra${
      count - 2 > 1 ? "s" : ""
    }`;
  };

  const count = bookmarkedList.length;

  const keywords = getOrderKeywords(
    bookmarkedList.map((news) => {
      return news.keyword;
    })
  );

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__text">Artigos salvos</p>
      <h1 className="saved-news-header__quantity">
        {`${user.name}, você tem ${count} artigo${count > 1 ? "s" : ""} salvo${
          count > 1 ? "s" : ""
        }`}
      </h1>
      <p className="saved-news-header__keywords">
        Por palavras-chave: {formatKeywords(keywords)}
      </p>
    </div>
  );
}
