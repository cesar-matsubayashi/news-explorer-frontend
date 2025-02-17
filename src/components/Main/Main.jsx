import "./Main.css";
import Prealoader from "../Preloader/Preloader";
import SearchNotFound from "../SearchNotFound/SearchNotFound";
import NewsCardList from "../NewsCardList/NewsCardList";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

export default function Main() {
  const { newsList, isLoading, error } = useContext(SearchContext);

  return (
    <main className="news">
      {isLoading && <Prealoader />}
      {/* <SearchNotFound /> */}
      {!isLoading && newsList.length > 0 && <NewsCardList />}
    </main>
  );
}
