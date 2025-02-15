import "./Preloader.css";
import preloader from "../../images/preloader.svg";

export default function Prealoader() {
  return (
    <div className="preloader-container">
      <img src={preloader} alt="Loading..." className="prealoder" />
      <p className="preloader-text">Procurando notícias...</p>
    </div>
  );
}
