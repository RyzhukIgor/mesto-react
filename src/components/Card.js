import React from "react";

export default function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
        console.log(props.card)
    }

    return (
        <div className="card">
            <button type="button" className="card__delete" />
            <img src={props.link} className="card__image" alt={props.name} onClick={handleClick}/>
            <div className="card__info">
                <h2 className="card__description">{props.name}</h2>
                <div className="card__like-group">
                    <button
                        type="button"
                        className="card__like"
                        aria-label="Поставить лайк"
                    />
                    <span className="card__number-likes">{props.likes}</span>
                </div>
            </div>
        </div>
    );
}
