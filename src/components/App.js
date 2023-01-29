import React, { useEffect, useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import apiConnect from "../utils/api";
import CurrentUserContext from "../context/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [isRenderLoading, setIsRenderLoading] = useState(false);
    

    useEffect(() => {
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

    function handleCardDelete (card) {
        apiConnect.deleteCard(card._id)
        .then(() => {setCards((cardsArr) => cardsArr.filter((cardItem) =>
          cardItem._id !== card._id))})
        .catch ((err) => {console.log(err)})
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

    function handleUpdateAvatar({avatar}) {
        apiConnect.changeAvatar(avatar)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleUpdateUser({name, about}) {
        setIsRenderLoading(true);
        apiConnect.editUserProfile({name, about})
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((err) => {
          console.log(err); 
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
                onCardDelete = {handleCardDelete}
            />
            <Footer />
            <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser}
            isRenderLoading={isRenderLoading} 
            />
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
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
