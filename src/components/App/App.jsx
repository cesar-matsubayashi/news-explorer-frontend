import "./App.css";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import SavedNewsPage from "../SavedNews/SavedNews";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import newsApi from "../../utils/newsApi";
import { SearchContext } from "../../contexts/SearchContext";
import { useEffect, useState, useRef } from "react";
import {
  getLocalNews,
  removeBookmarkedNews,
  removeLocalNews,
  setLocalNews,
} from "../../utils/news";
import { UserContext } from "../../contexts/UserContext";
import background from "../../images/background.png";
import { Route, Routes, useLocation } from "react-router";
import { PopupContext } from "../../contexts/PopupContext";
import { getToken, removeToken, setToken } from "../../utils/token";
import Register from "../Register/Register";
import RegisterSuccessful from "../RegisterSuccessful/RegisterSuccessful";
import Popup from "../Popup/Popup";
import api from "../../utils/mainApi";
import Login from "../Login/Login";

function App() {
  const location = useLocation();
  const [newsList, setNewsList] = useState([]);
  const [bookmarkedList, setBookmarkedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popup, setPopup] = useState(null);
  const [user, setUser] = useState({});
  const popupRef = useRef();

  useEffect(() => {
    const jwt = getToken();
    setIsLoggedIn(jwt);

    if (jwt) {
      setAuthenticatedUser(jwt);
      getBookmarked();
    }

    const localNews = JSON.parse(getLocalNews());

    if (!localNews) {
      return;
    }

    setNewsList(localNews);
  }, []);

  useEffect(() => {
    console.log(bookmarkedList);
  }, [bookmarkedList]);

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

  const setAuthenticatedUser = (token) => {
    api.setAuth(token);
    setToken(token);
    setIsLoggedIn(true);

    api.getUser().then((response) => {
      setUser(response);
    });
  };

  const handleLogin = (data) => {
    api
      .login(data)
      .then((response) => {
        const token = response.token;
        setAuthenticatedUser(token);

        getBookmarked();
        handleClosePopup();
      })
      .catch((error) => {
        let message;

        message =
          error.message === "Failed to fetch"
            ? { message: "Houve um erro inesperado" }
            : error;

        const loginPopup = {
          title: "Entrar",
          children: <Login errorMessage={message} />,
        };
        handleOpenPopup(loginPopup);
      });
  };

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  const handleRegister = (data) => {
    api
      .register(data)
      .then(() => {
        const registrationSuccessful = {
          title: "Cadastro concluído com sucesso!",
          children: <RegisterSuccessful />,
        };

        handleOpenPopup(registrationSuccessful);
      })
      .catch((error) => {
        const registerPopup = {
          title: "Inscrever-se",
          children: <Register errorMessage={error} />,
        };
        handleOpenPopup(registerPopup);
      });
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup();
  }

  const handleBookmark = (news) => {
    const isBookmarked = bookmarkedList.some(
      (bookmarked) => bookmarked.url === news.url
    );

    if (isBookmarked) {
      removeBookmarkedNews(bookmarkedList, news);
    } else {
      api.bookmarkArticles(JSON.stringify(news)).then((response) => {
        setBookmarkedList([...bookmarkedList, response]);
      });
    }
  };

  const getBookmarked = () => {
    api
      .getArticles()
      .then((response) => {
        setBookmarkedList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRemove = (news) => {
    api.removeArticles(news._id).then(() => {
      setBookmarkedList((newsList) =>
        newsList.filter((currentNews) => currentNews._id !== news._id)
      );
    });
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        newsList,
        isLoading,
        error,
        handleBookmark,
        bookmarkedList,
        handleRemove,
      }}
    >
      <UserContext.Provider
        value={{
          isLoggedIn,
          handleLogin,
          handleLogout,
          handleRegister,
          user,
        }}
      >
        <PopupContext.Provider
          value={{ handleOpenPopup, handleClosePopup, popup, popupRef }}
        >
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
            {popup && (
              <Popup
                onClose={handleClosePopup}
                title={popup.title}
                isNavigation={popup.isNavigation}
              >
                {popup.children}
              </Popup>
            )}
          </div>
        </PopupContext.Provider>
      </UserContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
