import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        navigation: {
          homeButton: "Home",
          savedButton: "Saved Articles",
          signinButton: "Sign in",
        },
        search: {
          headline: "What is happening in the world?",
          caption:
            "Find the latest news on any topic and save it to your personal account",
        },
        searchFrom: {
          placeholder: "Insert theme",
          invalidInput: "Please, insert a keyword",
          submit: "Search",
        },
        preloader: {
          text: "Looking for news...",
        },
        newsCardList: {
          title: "Search results",
          button: "Show more",
        },
        newsCard: {
          dateFormat: "en",
        },
        newsCardHeader: {
          signin: "Sign in to save articles",
        },
        about: {
          title: "About the author",
          description: {
            p1: "Hello, my name is Cesar Matsubayashi!",
            p2: "Graduated in Systems Analysis and Development, developer focused on backend but venturing into frontend with React.",
            p3: "Backend proficiency with C# and Node.js, Oracle and SQL Server databases and knowledge of MongoDB, version control with Github and scrum methodology.",
          },
        },
        footer: {
          copyright: "2025 News Explorer, developed by Cesar Matsubayashi",
          homeButton: "Home",
        },
      },
    },
    pt: {
      translation: {
        navigation: {
          homeButton: "Início",
          savedButton: "Artigos Salvos",
          signinButton: "Entrar",
        },
        search: {
          headline: "O que está acontecendo no mundo?",
          caption:
            "Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal",
        },
        searchFrom: {
          placeholder: "Inserir tema",
          invalidInput: "Por favor, insira uma palavra-chave",
          submit: "Procurar",
        },
        preloader: {
          text: "Procurando notícias...",
        },
        newsCardList: {
          title: "Procurar resultados",
          button: "Mostrar mais",
        },
        newsCard: {
          dateFormat: "pt-BR",
        },
        newsCardHeader: {
          signin: "Faça o login para salvar os artigos",
        },
        about: {
          title: "Sobre o autor",
          description: {
            p1: "Olá, meu nome é Cesar Matsubayashi!",
            p2: "Formado em Análise e Desenvolvimento de Sistemas, desenvolvedor com foco em backend mas se aventurando em frontend com React.",
            p3: "Domínio em backend com C# e Node.js, banco de dados oracle e sql server e conhecimento em MongoDB, controle de versão com Github e metodologia scrum.",
          },
        },
        footer: {
          copyright: "2025 News Explorer, desenvolvido por Cesar Matsubayashi",
          homeButton: "Início",
        },
      },
    },
  },
});

export default i18n;
