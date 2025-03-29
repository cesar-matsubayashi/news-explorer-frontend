import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import "./../Styles/Form.css";
import "./SearchForm.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext, useState } from "react";
import { getKeyword } from "../../utils/news";

export default function SearchForm() {
  const { t } = useTranslation();
  const { handleSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(getKeyword());

  const handleChange = (e) => setInputValue(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    handleSearch(data.get("keyword"));
  }

  return (
    <form className="form form_search" name="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        id="keyword-input"
        className="form__input form__input_el_keyword"
        placeholder={t("searchFrom.placeholder")}
        required
        onInvalid={(e) =>
          e.target.setCustomValidity(t("searchFrom.invalidInput"))
        }
        onInput={(e) => e.target.setCustomValidity("")}
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" name="submit" className="form__button">
        {t("searchFrom.submit")}
      </button>
    </form>
  );
}
