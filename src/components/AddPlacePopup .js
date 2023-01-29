import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

export function AddPlacePopup(props) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    useEffect(() => {
        setTitle("");
        setLink("");
    }, [props.isOpen]);

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            title,
            link,
        });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="add-image"
            title="Новое место"
            buttonText="Создать"
            onClose={props.onClose}
            onSubmit={handleAddPlaceSubmit}
        >
            <input
                id="image-name"
                type="text"
                className="popup__input popup__input_type_username popup__input_type_image-name"
                name="title"
                required=""
                placeholder="Название"
                minLength={2}
                maxLength={30}
                value={title}
                onChange={handleChangeTitle}
            />
            <span className="popup__error image-name-error" />
            <input
                id="url-address"
                type="url"
                className="popup__input popup__input_type_activity popup__input_type_image-src"
                name="url"
                required=""
                placeholder="Ссылка на картинку"
                value={link}
                onChange={handleChangeLink}
            />
            <span className="popup__error url-address-error" />
        </PopupWithForm>
    );
}
