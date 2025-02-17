import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import newsApi from "../../utils/newsApi";
import { SearchContext } from "../../contexts/SearchContext";
import { useEffect, useState } from "react";
import { getLocalNews, setLocalNews } from "../../utils/news";
import { UserContext } from "../../contexts/UserContext";

function App() {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localNews = JSON.parse(getLocalNews());

    if (!localNews) {
      return;
    }

    setNewsList(localNews);
  }, []);

  const handleSearch = async (keyword) => {
    setIsLoading(true);

    try {
      newsApi
        .getNews(keyword)
        .then((response) => {
          if (response.totalResults === 0) {
            const error = new Error(
              "Desculpe, mas nada corresponde aos seus termos de pesquisa"
            );
            error.title = "Nada encontrado";
            error.name = "DocumentNotFound";
            throw error;
          }

          setNewsList(response.articles);
          setLocalNews(response.articles, keyword);
        })
        .catch((err) => {
          if (err.name != "DocumentNotFound") {
            err.message =
              "Desculpe, pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.";
            err.title = "Algo deu errado";
          }

          setError(err);
        });
    } catch (err) {
      setError(err);
    } finally {
      setError(null);
      setIsLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{ handleSearch, newsList, isLoading, error }}
    >
      <UserContext.Provider value={{ isLoggedIn }}>
        <div className="page">
          <div className="background">
            <Header />
            <Search />
          </div>
          <Main />
          <About />
          <Footer />
        </div>
      </UserContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
