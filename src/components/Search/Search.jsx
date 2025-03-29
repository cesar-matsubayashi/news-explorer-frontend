import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import SearchForm from "../SearchForm/SearchForm";
import "./Search.css";

export default function Search() {
  const { t } = useTranslation();

  return (
    <section className="search">
      <h1 className="search__headline">{t("search.headline")}</h1>
      <p className="search__caption">{t("search.caption")}</p>
      <SearchForm />
    </section>
  );
}
