import React, {useState} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false)
  }

  function handleCardClick(card){
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  return (
    <div className="page">
  <Header />
  <Main 
  onEditProfile = {handleEditProfileClick} 
  onAddPlace = {handleAddPlaceClick}
  onEditAvatar = {handleEditAvatarClick}
  onCardClick = {handleCardClick}
  />
  <Footer /> 
  <PopupWithForm
  isOpen = {isEditProfilePopupOpen}
  name="profile"
  title="Редактировать профиль" 
  buttonText="Сохранить"
  onClose = {closeAllPopups}
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
  isOpen = {isAddPlacePopupOpen} 
  name="add-image" 
  title="Новое место" 
  buttonText="Создать"
  onClose = {closeAllPopups}
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
  card={selectedCard} 
  onClose={closeAllPopups} 
  isOpen={isImagePopupOpen}/>
  <PopupWithForm 
  name="confirm" 
  title="Вы уверены?" 
  buttonText="Да" 
  onClose = {closeAllPopups}/>
  <PopupWithForm
   isOpen = {isEditAvatarPopupOpen} 
   name="avatar" 
   title="Обновить аватар" 
   buttonText="Сохранить"
   onClose = {closeAllPopups}
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
    </div>
  );
}

export default App;
