import "./Main.css";
import Prealoader from "../Preloader/Preloader";
import SearchNotFound from "../SearchNotFound/SearchNotFound";

export default function Main() {
  return (
    <main className="news">
      <Prealoader />
      <SearchNotFound />
    </main>
  );
}
