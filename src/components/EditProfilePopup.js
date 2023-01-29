import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../context/CurrentUserContext";

export default function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }
    function handleDescription(e) {
        setDescription(e.target.value);
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({ name: name, about: description });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
        >
            <input
                id="input-name"
                type="text"
                className="popup__input popup__input_type_username"
                name="name"
                required=""
                placeholder="Введите имя"
                minLength={2}
                maxLength={40}
                value={name || ""}
                onChange={handleName}
            />
            <span className="popup__error input-name-error" />
            <input
                id="description-name"
                type="text"
                className="popup__input popup__input_type_activity"
                name="about"
                required=""
                placeholder="Вид деятельности"
                minLength={2}
                maxLength={200}
                value={description || ""}
                onChange={handleDescription}
            />
            <span className="popup__error description-name-error" />
        </PopupWithForm>
    );
}
