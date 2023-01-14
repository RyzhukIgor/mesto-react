
export default function Main() {

  function handleEditAvatarClick () {
    const popup = document.querySelector('.popup-avatar');
    popup.classList.add("popup_active")
  }

  function handleEditProfileClick () {
    const popup = document.querySelector('.profile-popup');
    popup.classList.add("popup_active")
  }

  function handleAddPlaceClick () {
    const popup = document.querySelector('.popup_type_add-image');
    popup.classList.add("popup_active")
  }



    return (
        <div className="content">
    <section className="profile">
      <div onClick={handleEditAvatarClick} className="profile__image">
        <img className="profile__avatar" alt="фото Жак-Ив Кусто" />
      </div>
      <div className="profile__info">
        <div className="profile__edit">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            onClick={handleEditProfileClick}
            className="profile__editor"
            type="button"
            aria-label="Редактировать профиль"
          />
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button
        onClick={handleAddPlaceClick}
        className="profile__add-button"
        type="button"
        aria-label="Добавить фото"
      />
    </section>
    <section className="cards" />
  </div>
    )
}