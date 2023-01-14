import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
  <Header />
  <Main />
  <Footer /> 
  <div className="popup profile-popup">
    <div className="popup__container">
      <button type="button" className="popup__close" aria-label="Закрыть" />
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form" name="data" noValidate="">
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
        <button type="submit" className="popup__submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
  <div className="popup popup_type_add-image">
    <div className="popup__container">
      <button type="button" className="popup__close" aria-label="Закрыть" />
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form" name="formImage" noValidate="">
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
        <button type="submit" className="popup__submit">
          Создать
        </button>
      </form>
    </div>
  </div>
  <div className="popup popup_type_reveal-image">
    <article className="popup__large-container">
      <button type="button" className="popup__close" aria-label="Закрыть" />
      <img src="#" className="popup__image" alt="" />
      <p className="popup__description" />
    </article>
  </div>
  <div className="popup popup-confirm-delete">
    <div className="popup__container">
      <button type="button" className="popup__close" aria-label="Закрыть" />
      <h2 className="popup__title popup-confirm-delete__title">Вы уверены?</h2>
      <form className="popup__form" name="formDeleteImage">
        <button type="submit" className="popup__submit">
          Да
        </button>
      </form>
    </div>
  </div>
  <div className="popup popup-avatar">
    <div className="popup__container">
      <button type="button" className="popup__close" aria-label="Закрыть" />
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" name="formAvatar" noValidate="">
        <input
          id="url-avatar"
          type="url"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          required=""
          placeholder="Сменить фото"
        />
        <span className="popup__error url-avatar-error" />
        <button type="submit" className="popup__submit">
          Создать
        </button>
      </form>
    </div>
  </div>
  <template className="cards-template" />
  {/*  */}
    </div>
  );
}

export default App;
