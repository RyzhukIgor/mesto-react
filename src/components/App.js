import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import apiConnect from "../utils/api";
import CurrentUserContext from "../context/CurrentUserContext";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        apiConnect.getUserInfoProfile()
        .then((res) => {
            setCurrentUser(res)
        })
        .catch((err) => {
            console.log(err);
        });

        apiConnect.getInitialCards()
        .then((res) => {
            setCards(res)
        })
        .catch((err) => {
            console.log(err)
        });

    }, [])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

    function handleCardClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard({
            name: card.name,
            link: card.link,
        });
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(user => user._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        apiConnect.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch ((err) => {
            console.log(err)
        });
    }

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards = {cards}
                onCardLike={handleCardLike}
            />
            <Footer />
            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                name="profile"
                title="Редактировать профиль"
                buttonText="Сохранить"
                onClose={closeAllPopups}
            >
                <input
                    id="input-name"
                    type="text"
                    className="popup__input popup__input_type_username"
                    name="username"
                    required=""
                    placeholder="Введите имя"
                    minLength={2}
                    maxLength={40}
                />
                <span className="popup__error input-name-error" />
                <input
                    id="description-name"
                    type="text"
                    className="popup__input popup__input_type_activity"
                    name="activity"
                    required=""
                    placeholder="Вид деятельности"
                    minLength={2}
                    maxLength={200}
                />
                <span className="popup__error description-name-error" />
            </PopupWithForm>
            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                name="add-image"
                title="Новое место"
                buttonText="Создать"
                onClose={closeAllPopups}
            >
                <input
                    id="image-name"
                    type="text"
                    className="popup__input popup__input_type_username popup__input_type_image-name"
                    name="username"
                    required=""
                    placeholder="Название"
                    minLength={2}
                    maxLength={30}
                />
                <span className="popup__error image-name-error" />
                <input
                    id="url-address"
                    type="url"
                    className="popup__input popup__input_type_activity popup__input_type_image-src"
                    name="activity"
                    required=""
                    placeholder="Ссылка на картинку"
                />
                <span className="popup__error url-address-error" />
            </PopupWithForm>
            <ImagePopup
                name="reveal-image"
                card={selectedCard}
                onClose={closeAllPopups}
                isOpen={isImagePopupOpen}
            />
            <PopupWithForm
                name="confirm"
                title="Вы уверены?"
                buttonText="Да"
                onClose={closeAllPopups}
            />
            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                name="avatar"
                title="Обновить аватар"
                buttonText="Сохранить"
                onClose={closeAllPopups}
            >
                <input
                    id="url-avatar"
                    type="url"
                    className="popup__input popup__input_type_avatar"
                    name="avatar"
                    required=""
                    placeholder="Сменить фото"
                />
                <span className="popup__error url-avatar-error" />
            </PopupWithForm>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
