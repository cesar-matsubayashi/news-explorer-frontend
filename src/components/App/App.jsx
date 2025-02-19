import "./App.css";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import newsApi from "../../utils/newsApi";
import { SearchContext } from "../../contexts/SearchContext";
import { useEffect, useState } from "react";
import { getLocalNews, removeLocalNews, setLocalNews } from "../../utils/news";
import { UserContext } from "../../contexts/UserContext";
import background from "../../images/background.png";
import { Route, Routes, useLocation } from "react-router";

function App() {
  const location = useLocation();
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const user = { name: "Cesar", email: "cesar@email.com" };

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
          removeLocalNews();
          setError(err);
        });
    } catch (err) {
      removeLocalNews();
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
      <UserContext.Provider value={{ isLoggedIn, user }}>
        <div className="page">
          {location.pathname === "/" && (
            <img src={background} className="background" />
          )}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute>
                    <SavedNewsPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
