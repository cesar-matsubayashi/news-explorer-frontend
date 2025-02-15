class NewsAPI {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method: method,
      headers: this._headers,
    };

    if (body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._url}${endpoint}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getNews(keyword) {
    const today = new Date();

    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const endpoint = `/everything?q=${keyword}&from=${
      lastWeek.toISOString().split("T")[0]
    }&to=${today.toISOString().split("T")[0]}&sortBy=popularity&pageSize=3`;

    return this._makeRequest(endpoint);
  }
}

const API_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const newsApi = new NewsAPI({
  baseUrl: API_URL,
  headers: {
    Authorization: API_KEY,
  },
});

export default newsApi;
