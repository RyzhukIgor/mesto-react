import { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../context/CurrentUserContext.js";

export default function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace } = props;
    const currentUser = useContext(CurrentUserContext);

    return (
        <div className="content">
            <section className="profile">
                <div onClick={onEditAvatar} className="profile__image">
                    <img
                        src={currentUser.avatar}
                        className="profile__avatar"
                        alt="фото Жак-Ив Кусто"
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button
                            onClick={onEditProfile}
                            className="profile__editor"
                            type="button"
                            aria-label="Редактировать профиль"
                        />
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button
                    onClick={onAddPlace}
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить фото"
                />
            </section>
            <section className="cards">
                {props.cards.map((card) => (
                    <Card
                        key={card._id}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        card={card}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>
        </div>
    );
}
