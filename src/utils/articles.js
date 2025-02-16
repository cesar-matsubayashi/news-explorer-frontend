const ARTICLES_KEY = "articles";

export const setLocalArticles = (articles) => {
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
};

export const getLocalArticles = () => {
  return localStorage.getItem(ARTICLES_KEY);
};

export const removeLocalArticles = () => {
  localStorage.removeItem(ARTICLES_KEY);
};
