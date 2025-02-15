import "./../Styles/Form.css";
import "./SearchForm.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

export default function SearchForm() {
  const { handleSearch } = useContext(SearchContext);

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
        placeholder="Inserir tema"
        required
        onInvalid={(e) =>
          e.target.setCustomValidity("Por favor, insira uma palavra-chave")
        }
        onInput={(e) => e.target.setCustomValidity("")}
      />
      <button type="submit" name="submit" className="form__button">
        Procurar
      </button>
    </form>
  );
}
