class Api {
constructor({ baseUrl, headers }) {
  this._headers = headers;
  this._baseUrl = baseUrl;
}

//запрос имя профиля
getProfile() {
  return fetch(`${this._baseUrl}/users/me`, {
    // headers: this._headers,
    headers: this._getHeaders(),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
//запрос карточек
getInitialCards() {
  return fetch(`${this._baseUrl}/cards`, {
    // headers: this._headers,
    headers: this._getHeaders(),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
// Редактирование профиля
editProfile(name, about) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    // headers: this._headers,
    headers: this._getHeaders(),
    body: JSON.stringify({
      name,
      about,
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
//добавление карточки
addCard(name, link) {
  return fetch(`${this._baseUrl}/cards`, {
    method: "POST",
    // headers: this._headers,
    headers: this._getHeaders(),
    body: JSON.stringify({
      name,
      link,
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
// удаление карточки
deleteCard(id) {
  return fetch(`${this._baseUrl}/cards/${id}`, {
    method: "DELETE",
    // headers: this._headers,
    headers: this._getHeaders(),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
// удаление лайков
deleteLike(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`, {
    method: "DELETE",
    // headers: this._headers,
    headers: this._getHeaders(),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
// Добавление лайков
addLike(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`, {
    method: "PUT",
    // headers: this._headers,
    headers: this._getHeaders(),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
// изменение аватара
changeAvatar(avatar) {
  return fetch(`${this._baseUrl}/users/me/avatar`, {
    method: "PATCH",
    // headers: this._headers,
    headers: this._getHeaders(),
    body: JSON.stringify({
      avatar,
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}

toggleLikeCards(id, currentLike) {
  return fetch(`${this._baseUrl}/cards/${id}/likes/`, {
    method: currentLike ? "PUT" : "DELETE",
    // headers: this._headers,
    headers: this._getHeaders(),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .catch(console.log);
}
_getHeaders() {
  const jwt = localStorage.getItem('jwt');
  return {
    'Authorization': `Bearer ${jwt}`,
    ...this._headers,
  };
}
}



const api = new Api({
// baseUrl: "https://mesto.nomoreparties.co/v1/cohort-37",
// baseUrl: "api.stswm.nomoreparties.sbs",
baseUrl: "http://localhost:3001",
headers: {
  // authorization: `${localStorage.getItem('jwt')}`,
  "Content-Type": "application/json",
},
});

export default api;
