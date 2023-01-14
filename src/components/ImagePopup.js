import React from 'react';

export default function ImagePopup(props) {
    return (
        <div className="popup popup_type_reveal-image">
        <article className="popup__large-container">
          <button type="button" className="popup__close" aria-label="Закрыть" />
          <img src="#" className="popup__image" alt="" />
          <p className="popup__description" />
        </article>
      </div>
    )
    
}