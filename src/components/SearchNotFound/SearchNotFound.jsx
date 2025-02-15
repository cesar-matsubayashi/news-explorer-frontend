import "./SearchNotFound.css";
import notFound from "../../images/not-found.svg";

export default function SearchNotFound() {
  return (
    <div className="not-found">
      <img src={notFound} alt="Nada Encontrado" className="not-found__image" />
      <h1 className="not-found__title">Nada Encontrado</h1>
      <p className="not-found__description">
        Desculpe, mas nada corresponde aos seus termos de pesquisa
      </p>
    </div>
  );
}
