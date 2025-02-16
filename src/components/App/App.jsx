import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import newsApi from "../../utils/newsApi";
import { SearchContext } from "../../contexts/SearchContext";
import { useEffect, useState } from "react";
import { getLocalArticles, setLocalArticles } from "../../utils/articles";
import { UserContext } from "../../contexts/UserContext";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = (keyword) => {
    setIsLoading(true);

    try {
      newsApi
        .getNews(keyword)
        .then((response) => {
          setArticles(response.articles);
          setLocalArticles(response.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const localArticles = getLocalArticles();

  return (
    <SearchContext.Provider
      value={{ handleSearch, articles, isLoading, error }}
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
