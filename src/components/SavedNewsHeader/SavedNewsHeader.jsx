import "./SavedNewsHeader.css";

export default function SavedNewsHeader() {
  const name = "Elise";

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__text">Artigos salvos</p>
      <h1 className="saved-news-header__quantity">
        {name}, você tem 5 artigos salvos
      </h1>
      <p className="saved-news-header__keywords">Por palavras-chave: </p>
    </div>
  );
}
