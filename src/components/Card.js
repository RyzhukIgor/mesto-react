import React from "react";

export default function Card(props) {
    const { name, link, likes } = props;

    function handleClick() {
        props.onCardClick(props.card);
        console.log(props.card);
    }

    return (
        <div className="card">
            <button type="button" className="card__delete" />
            <img
                src={link}
                className="card__image"
                alt={name}
                onClick={handleClick}
            />
            <div className="card__info">
                <h2 className="card__description">{name}</h2>
                <div className="card__like-group">
                    <button
                        type="button"
                        className="card__like"
                        aria-label="Поставить лайк"
                    />
                    <span className="card__number-likes">{likes}</span>
                </div>
            </div>
        </div>
    );
}
