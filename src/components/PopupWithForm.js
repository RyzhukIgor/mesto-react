import React from "react";

export default function PopupWithForm(props) {
    const { onSubmit, name, isOpen, onClose, title, children, buttonText } =
        props;
    return (
        <div
            className={`popup popup_type_${name} ${
                isOpen ? "popup_active" : ""
            }`}
        >
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close"
                    onClick={onClose}
                />
                <h2 className="popup__title">{title}</h2>
                <form
                    className="popup__form"
                    name={name}
                    onSubmit={onSubmit}
                    noValidate
                >
                    {children}
                    <button type="submit" className="popup__submit">
                        {buttonText || "Сохранить"}
                    </button>
                </form>
            </div>
        </div>
    );
}
