import "./Main.css";
import Prealoader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import NewsCardList from "../NewsCardList/NewsCardList";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

export default function Main() {
  const { isLoading, error, newsList } = useContext(SearchContext);

  return (
    <main className="news">
      {isLoading ? (
        <Prealoader />
      ) : error ? (
        <SearchError error={error} />
      ) : (
        newsList.length > 0 && <NewsCardList />
      )}
    </main>
  );
}
