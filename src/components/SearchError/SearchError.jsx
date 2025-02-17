import "./SearchError.css";
import notFound from "../../images/not-found.svg";

export default function SearchError({ error }) {
  return (
    <div className="not-found">
      <img src={notFound} alt="Nada Encontrado" className="not-found__image" />
      <h1 className="not-found__title">{error.title}</h1>
      <p className="not-found__description">{error.message}</p>
    </div>
  );
}
