import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import newsApi from "../../utils/newsApi";
import { SearchContext } from "../../contexts/SearchContext";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (keyword) => {
    setIsLoading(true);

    try {
      newsApi
        .getNews(keyword)
        .then((response) => {
          setArticles(response.articles);
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

  // console.log(articles);
  return (
    <SearchContext.Provider
      value={{ handleSearch, articles, isLoading, error }}
    >
      <div className="page">
        <div className="background">
          <Header />
          <Search />
        </div>
        <Main />
        <About />
        <Footer />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
