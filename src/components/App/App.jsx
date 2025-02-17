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

    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      newsApi
        .getNews(keyword)
        .then((response) => {
          setNewsList(response.articles);
          setLocalNews(response.articles, keyword);
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
