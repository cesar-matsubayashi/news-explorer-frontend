import "./Main.css";
import Prealoader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import NewsCardList from "../NewsCardList/NewsCardList";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

export default function Main() {
  const { newsList, isLoading, error } = useContext(SearchContext);

  return (
    <main className="news">
      {isLoading && <Prealoader />}
      {!isLoading && error && <SearchError error={error} />}
      {!isLoading && !error && <NewsCardList />}
    </main>
  );
}
