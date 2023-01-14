import { useEffect, useState } from "react";
import apiConnect from "../utils/Api";

export default function Main(props) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  

    useEffect(() => { 
      Promise.all([apiConnect.getUserInfoProfile()])
    .then(([profileInfo]) => {
      setUserName(profileInfo.name);
      setUserDescription(profileInfo.about);
      setUserAvatar(profileInfo.avatar);
    })
    .catch((err) => {
        console.log(err);
    });
  });

    return (
        <div className="content">
    <section className="profile">
      <div onClick={props.onEditAvatar} className="profile__image">
        <img src={userAvatar} className="profile__avatar" alt="фото Жак-Ив Кусто" />
      </div>
      <div className="profile__info">
        <div className="profile__edit">
          <h1 className="profile__title">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__editor"
            type="button"
            aria-label="Редактировать профиль"
          />
        </div>
        <p className="profile__subtitle">{userDescription}</p>
      </div>
      <button
        onClick={props.onAddPlace}
        className="profile__add-button"
        type="button"
        aria-label="Добавить фото"
      />
    </section>
    <section className="cards" />
  </div>
    )
}