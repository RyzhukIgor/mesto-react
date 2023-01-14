

export default function Main(props) {



    return (
        <div className="content">
    <section className="profile">
      <div onClick={props.onEditAvatar} className="profile__image">
        <img className="profile__avatar" alt="фото Жак-Ив Кусто" />
      </div>
      <div className="profile__info">
        <div className="profile__edit">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__editor"
            type="button"
            aria-label="Редактировать профиль"
          />
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button
        onClick={props.onAddPlace}
        className="profile__add-button"
        type="button"
        aria-label="Добавить фото"
      />
    </section>
    <section className="cards" />
  </div>
    )
}