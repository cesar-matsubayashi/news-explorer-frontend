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
        return res.json();
      }

      const errorData = await res.json();
      return Promise.reject(errorData);
    });
  }

  setAuth(jwt) {
    this._headers.Authorization = jwt;
  }

  register(data) {
    return this._makeRequest("/signup", "POST", data);
  }

  login(data) {
    return this._makeRequest("/signin", "POST", data);
  }
}

const API_URL = import.meta.env.VITE_MAIN_API_URL;

const api = new API({ baseUrl: API_URL });

export default api;
