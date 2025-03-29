import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import "./Footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {t("footer.copyright")}</p>
      <div className="footer__container">
        <ul className="footer__links">
          <li>
            <Link className="footer__home" to="/">
              {t("footer.homeButton")}
            </Link>
          </li>
          <li className="footer__author">Cesar Matsubayashi</li>
        </ul>
        <ul className="footer__social-media">
          <li>
            <Link
              to="https://github.com/cesar-matsubayashi"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={github} alt="GitHub" className="footer__github" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/cesar-matsubayashi-587998b5"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={linkedin} alt="LinkedIn" className="footer__linkedin" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
