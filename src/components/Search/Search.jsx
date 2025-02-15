import SearchForm from "../SearchForm/SearchForm";
import "./Search.css";

export default function Search() {
  return (
    <section className="search">
      <h1 className="search__headline">O que está acontecendo no mundo?</h1>
      <p className="search__caption">
        Encontre as últimas notícias sobre qualquer tema e salve elas em sua
        conta pessoal
      </p>
      <SearchForm />
    </section>
  );
}
