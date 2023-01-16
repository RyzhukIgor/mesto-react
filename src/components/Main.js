import { useEffect, useState } from "react";
import apiConnect from "../utils/api.js";
import Card from "./Card";

export default function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace } = props;
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([
            apiConnect.getUserInfoProfile(),
            apiConnect.getInitialCards(),
        ])
            .then(([profileInfo, cards]) => {
                setUserName(profileInfo.name);
                setUserDescription(profileInfo.about);
                setUserAvatar(profileInfo.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="content">
            <section className="profile">
                <div onClick={onEditAvatar} className="profile__image">
                    <img
                        src={userAvatar}
                        className="profile__avatar"
                        alt="фото Жак-Ив Кусто"
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__title">{userName}</h1>
                        <button
                            onClick={onEditProfile}
                            className="profile__editor"
                            type="button"
                            aria-label="Редактировать профиль"
                        />
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button
                    onClick={onAddPlace}
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить фото"
                />
            </section>
            <section className="cards">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        card={card}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>
        </div>
    );
}
