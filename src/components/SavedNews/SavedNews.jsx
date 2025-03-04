import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsCardHeader from "../SavedNewsCardHeader/SavedNewsCardHeader";
import SearchError from "../SearchError/SearchError";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export default function SavedNewsPage() {
  const { bookmarkedList } = useContext(SearchContext);

  return (
    <>
      <SavedNewsHeader />
      {bookmarkedList.length === 0 ? (
        <SearchError
          error={{
            title: "Não encontramos nada!",
            message: `Encontre as suas notícias salvas aqui! Salve seus artigos favoritos e volte aqui!`,
          }}
        />
      ) : (
        <section className="saved-news">
          {bookmarkedList.map((news) => (
            <NewsCard key={news.url} news={news}>
              <SavedNewsCardHeader keyword={news.keyword} />
            </NewsCard>
          ))}
        </section>
      )}
    </>
  );
}
