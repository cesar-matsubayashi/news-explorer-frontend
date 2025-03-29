import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import "./Preloader.css";
import preloader from "../../images/preloader.svg";

export default function Prealoader() {
  const { t } = useTranslation();

  return (
    <div className="preloader-container">
      <img src={preloader} alt="Loading..." className="prealoder" />
      <p className="preloader-text">{t("preloader.text")}</p>
    </div>
  );
}
