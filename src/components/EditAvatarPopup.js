import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

export default function EditAvatarPopup(props) {
    const avatarRef = useRef();
    useEffect(() => {
        avatarRef.current.value = "";
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                id="url-avatar"
                type="url"
                className="popup__input popup__input_type_avatar"
                name="avatar"
                required=""
                placeholder="Сменить фото"
                ref={avatarRef}
            />
            <span className="popup__error url-avatar-error" />
        </PopupWithForm>
    );
}
