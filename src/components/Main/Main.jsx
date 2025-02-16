import "./Main.css";
import Prealoader from "../Preloader/Preloader";
import SearchNotFound from "../SearchNotFound/SearchNotFound";
import NewsCardList from "../NewsCardList/NewsCardList";

export default function Main() {
  return (
    <main className="news">
      {/* <Prealoader />
      <SearchNotFound /> */}
      <NewsCardList />
    </main>
  );
}
