import React from 'react';

export default function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active' : ''}`} >
        <div className="popup__large-container">
          <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onClose}/>
          <img src={props.card.link} className="popup__image" alt={props.card.name}/>
          <p className="popup__description">{props.card.name}</p>
        </div>
      </div>
    )
    
}