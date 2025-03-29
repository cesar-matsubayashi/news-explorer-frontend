import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import "./About.css";
import author from "../../images/author.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <img className="about__image" src={author} alt="Foto autor" />
      <div className="about__author">
        <h1 className="about__title">{t("about.title")}</h1>
        <p className="about__description">
          {t("about.description.p1")}
          <br />
          <br />
          {t("about.description.p3")}
          <br />
          <br />
          {t("about.description.p3")}
        </p>
      </div>
    </section>
  );
}
