import React from "react";
import CurrentUserContext from "../context/CurrentUserContext";

export default function Card(props) {
    const { name, link, likes } = props;
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(
        (item) => item._id === currentUser._id
    );

    const cardLikeButtonClassName = `card__like ${
        isLiked && "card__like_active"
    }`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <div className="card">
            <img
                src={link}
                className="card__image"
                alt={name}
                onClick={handleClick}
            />
            {isOwn && <button
                    className="card__delete"
                    type="button"
                    onClick={handleDeleteClick}
                />
            }
            <div className="card__info">
                <h2 className="card__description">{name}</h2>
                <div className="card__like-group">
                    <button
                        type="button"
                        className={cardLikeButtonClassName}
                        aria-label="Поставить лайк"
                        onClick={handleLikeClick}
                    />
                    <span className="card__number-likes">{likes}</span>
                </div>
            </div>
        </div>
    );
}
