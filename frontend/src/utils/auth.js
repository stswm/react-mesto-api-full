class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
  }

  // Регистрация
  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  // Авторизация
  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
  }
}

const auth = new Auth({
  // baseUrl: "https://auth.nomoreparties.co",
  baseUrl: "https://api.stswm.nomoreparties.sbs",
  // baseUrl: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

export default auth