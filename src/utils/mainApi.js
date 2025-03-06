class API {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = {};
  }

  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method: method,
      headers: this._headers,
    };

    if (body) {
      options.body = body;
    }

    return fetch(`${this._url}${endpoint}`, options).then(async (res) => {
      if (res.ok) {
        if (res.status === 204) {
          return [];
        }
        return res.json();
      }

      const error = await res.json();

      const errorData = {
        status: res.status,
        message: typeof error === "object" ? error.message : error,
      };

      return Promise.reject(errorData);
    });
  }

  _setContentType(type) {
    this._headers["Content-Type"] = type;
  }

  setAuth(jwt) {
    this._headers.Authorization = jwt;
  }

  register(data) {
    this._headers = {};
    this._setContentType("application/json");
    return this._makeRequest("/signup", "POST", data);
  }

  login(data) {
    this._headers = {};
    this._setContentType("application/json");
    return this._makeRequest("/signin", "POST", data);
  }

  getUser() {
    this._setContentType("application/json");
    return this._makeRequest("/users/me");
  }

  getArticles() {
    this._setContentType("application/json");
    return this._makeRequest("/articles");
  }

  bookmarkArticles(data) {
    this._setContentType("application/json");
    return this._makeRequest("/articles", "POST", data);
  }

  removeArticles(id) {
    this._setContentType("application/json");
    return this._makeRequest(`/articles/${id}`, "DELETE");
  }
}

const API_URL = import.meta.env.VITE_MAIN_API_URL;

const api = new API({ baseUrl: API_URL });

export default api;
