class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfoProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    editUserProfile(userProfile) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(userProfile),
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    addNewCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ name: cardData.title, link: cardData.link }),
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    /*   putLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    deleteLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            return this._getResponse(res);
        });
    } */

    changeAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            }),
        }).then((res) => {
            return this._getResponse(res);
        });
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: "PUT",
                headers: this._headers,
            }).then((res) => {
                return this._getResponse(res);
            });
        } else {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: "DELETE",
                headers: this._headers,
            }).then((res) => {
                return this._getResponse(res);
            });
        }
    }
}

const apiConnect = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-56",
    headers: {
        authorization: "3cf2861b-0109-4432-b8bc-65d940a41203",
        "Content-Type": "application/json",
    },
});
export default apiConnect;
