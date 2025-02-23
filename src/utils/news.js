import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const NEWS_KEY = "news";
const KEYWORD_KEY = "keyword";

export const setLocalNews = (news, keyword) => {
  localStorage.setItem(NEWS_KEY, JSON.stringify(news));
  localStorage.setItem(KEYWORD_KEY, keyword);
};

export const getLocalNews = () => {
  return localStorage.getItem(NEWS_KEY);
};

export const getKeyword = () => {
  return localStorage.getItem(KEYWORD_KEY);
};

export const removeLocalNews = () => {
  localStorage.removeItem(NEWS_KEY);
  localStorage.removeItem(KEYWORD_KEY);
};

export const setBookmarkedNews = (bookmarkedList, news) => {
  bookmarkedList.push(news);
  localStorage.setItem("bookmark", JSON.stringify(bookmarkedList));
};

export const getBookmarkedNews = () => {
  return localStorage.getItem("bookmark");
};

export const removeBookmarkedNews = (bookmarkedList, news) => {
  const newBookmark = bookmarkedList.filter(
    (bookmark) => bookmark.url !== news.url
  );
  localStorage.setItem("bookmark", JSON.stringify(newBookmark));
};
