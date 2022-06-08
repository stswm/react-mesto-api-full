import React from "react";
import useClose from "../../utils/useClose";

function PopupWithForm({ title, name, isOpen, onClose, BTNtext, children, onSubmit}) {
  useClose(isOpen,onClose)
  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opend' : ''}`}>
      <div className="popup__shell">
        <button type="button" className="popup__close buttonEffect" onClick={onClose}></button>
        <form className="popup__container" name={`${name}Form`} onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          <div className="form__content">{children}</div>
          <button type="submit" className="popup__save">{BTNtext}</button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
