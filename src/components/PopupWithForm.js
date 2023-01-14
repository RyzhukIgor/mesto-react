import React from 'react';

export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active' : ''}`}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={ props.onClose}/>
      <h2 className="popup__title">{props.title}</h2>
      <form className="popup__form" name={props.name} noValidate>
        { props.children}
        <button type="submit" className="popup__submit">
         { props.buttonText || 'Сохранить'}
        </button>
      </form>
    </div>
  </div>
  )
}