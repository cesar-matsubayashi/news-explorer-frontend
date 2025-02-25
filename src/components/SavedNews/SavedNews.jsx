import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsCardHeader from "../SavedNewsCardHeader/SavedNewsCardHeader";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export default function SavedNewsPage() {
  const { bookmarkedList } = useContext(SearchContext);

  return (
    <>
      <SavedNewsHeader />
      <section className="saved-news">
        {bookmarkedList.map((news) => (
          <NewsCard key={news.url} news={news}>
            <SavedNewsCardHeader keyword={news.keyword} />
          </NewsCard>
        ))}
      </section>
    </>
  );
}
