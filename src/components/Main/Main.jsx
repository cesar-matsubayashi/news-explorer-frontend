import "./Main.css";
import Prealoader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import NewsCardList from "../NewsCardList/NewsCardList";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";
import Popup from "../Popup/Popup";
import { PopupContext } from "../../contexts/PopupContext";

export default function Main() {
  const { isLoading, error, newsList } = useContext(SearchContext);
  const { popup, handleClosePopup } = useContext(PopupContext);

  return (
    <main className="news">
      {isLoading ? (
        <Prealoader />
      ) : error ? (
        <SearchError error={error} />
      ) : (
        newsList.length > 0 && <NewsCardList />
      )}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
