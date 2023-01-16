import React from "react";

export default function ImagePopup(props) {
    const { name, isOpen, onClose, card } = props;
    return (
        <div
            className={`popup popup_type_${name} ${
                isOpen ? "popup_active" : ""
            }`}
        >
            <div className="popup__large-container">
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                    onClick={onClose}
                />
                <img src={card.link} className="popup__image" alt={card.name} />
                <p className="popup__description">{card.name}</p>
            </div>
        </div>
    );
}
