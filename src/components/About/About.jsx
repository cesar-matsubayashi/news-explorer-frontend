import "./About.css";
import author from "../../images/author.jpg";

export default function About() {
  return (
    <section className="about">
      <img className="about__image" src={author} alt="Foto autor" />
      <div className="about__author">
        <h1 className="about__title">Sobre o autor</h1>
        <p className="about__description">
          Formado em Análise e Desenvolvimento de Sistemas, desenvolvedor com
          foco em backend mas se aventurando em frontend com React.
          <br /> <br />
          Domínio em backend com C# e Node.js, banco de dados oracle e sql
          server e conhecimento em MongoDB, controle de versão com Github e
          metodologia scrum.
        </p>
      </div>
    </section>
  );
}
