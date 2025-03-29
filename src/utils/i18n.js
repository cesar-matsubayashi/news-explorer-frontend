import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        navigation: {
          login: "Sign in",
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
        savedNewsHeader: {
          title: "Saved articles",
          keyword: {
            by: "By keywords: ",
            join: " and ",
            other: "{keywords} and {count} others",
          },
          quantity: {
            singular: "{name}, you have {count} article saved",
            plural: "{name}, you have {count} articles saved",
          },
        },
        savedNewsCardHeader: {
          message: "Remove from saved",
        },
        login: {
          error: {
            email: {
              valueMissing: "E-mail is required",
              typeMismatch: "Invalid e-mail",
            },
            password: {
              valueMissing: "Password is required",
            },
          },
          registerTitle: "Sign up",
          email: {
            label: "E-mail",
            placeholder: "Insert e-mail",
          },
          password: {
            label: "Password",
            placeholder: "Insert password",
          },
          submit: "Sign in",
          or: "or",
        },
        register: {
          error: {
            email: {
              valueMissing: "E-mail is required",
              typeMismatch: "Invalid e-mail",
            },
            password: {
              valueMissing: "Password is required",
              tooShort: "Password must have at least 8 characters",
            },
            name: {
              valueMissing: "Name is required",
              tooShort: "Name must be at least 2 characters long",
              tooLong: "Name must be at most 40 characters long",
            },
          },
          signinTitle: "Sign in",
          email: {
            label: "E-mail",
            placeholder: "Insert e-mail",
          },
          password: {
            label: "Password",
            placeholder: "Insert password",
          },
          username: {
            label: "Username",
            placeholder: "Insert your username",
          },
          submit: "Sign up",
          or: "or",
        },
        app: {
          login: "Sign in",
          register: "Sign up",
          registrationSuccessful: "Registration completed successfully!",
          api: {
            nothingMatches: {
              title: "Nothing found",
              message: "Sorry, but nothing matches your search terms.",
            },
            serverError: {
              title: "Something went wrong",
              message:
                "Sorry, there may be a connection problem or the server may be down. Please try again later.",
            },
            fetchError: "There was an unexpected error",
          },
        },
      },
    },
    pt: {
      translation: {
        navigation: {
          login: "Entrar",
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
        savedNewsHeader: {
          title: "Artigos salvos",
          keyword: {
            by: "Por palavras-chave: ",
            join: " e ",
            other: "{keywords} e {count} outras",
          },
          quantity: {
            singular: "{name}, você tem {count} artigo salvo",
            plural: "{name}, você tem {count} artigos salvos",
          },
        },
        savedNewsCardHeader: {
          message: "Remover de salvos",
        },
        login: {
          error: {
            email: {
              valueMissing: "E-mail é necessário",
              typeMismatch: "E-mail inválido",
            },
            password: {
              valueMissing: "Senha é necessária",
            },
          },
          registerTitle: "Inscrever-se",
          email: {
            label: "E-mail",
            placeholder: "Insira e-mail",
          },
          password: {
            label: "Senha",
            placeholder: "Insira senha",
          },
          submit: "Entrar",
          or: "ou",
        },
        register: {
          error: {
            email: {
              valueMissing: "E-mail é necessário",
              typeMismatch: "E-mail inválido",
            },
            password: {
              valueMissing: "Senha é necessária",
              tooShort: "Senha deve ter no mínimo 8 caracteres",
            },
            name: {
              valueMissing: "Nome é necessário",
              tooShort: "Nome deve ter no mínimo 2 caracteres",
              tooLong: "Nome deve ter no máximo 30 caracteres",
            },
          },
          signinTitle: "Entrar",
          email: {
            label: "E-mail",
            placeholder: "Insira e-mail",
          },
          password: {
            label: "Senha",
            placeholder: "Insira senha",
          },
          username: {
            label: "Nome de usuário",
            placeholder: "Insira seu nome de usuário",
          },
          submit: "Inscrever-se",
          or: "ou",
          signinLink: "Entre",
        },
        app: {
          login: "Entrar",
          register: "Inscrever-se",
          registrationSuccessful: "Cadastro concluído com sucesso!",
          api: {
            nothingMatches: {
              title: "Nada encontrado",
              message:
                "Desculpe, mas nada corresponde aos seus termos de pesquisa",
            },
            serverError: {
              title: "Algo deu errado",
              message:
                "Desculpe, pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
            },
            fetchError: "Houve um erro inesperado",
          },
        },
      },
    },
  },
});

export default i18n;
