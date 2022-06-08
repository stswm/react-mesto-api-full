import React, { useContext, useRef, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function EditAvatarPopup({ isOpen, onClose, onSubmit, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ avatar: inputRef.current.value });
  }

  useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);
  function changePreviw() {
    document.querySelector(".preview__avatar").src =
      inputRef.current.value || currentUser.avatar;
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      title="Обновить аватар"
      BTNtext={isLoading ? "Сохраняем..." : "Сохранить"}
    >
      <div style={{display: "flex", flexWrap: "wrap"}}>
      <div>
        <input
          onBlur={changePreviw}
          ref={inputRef}
          name="avatar"
          id="avatar"
          className="popup__input popup__input_avatar"
          placeholder=" Укажите ссылку на аватар"
          type="url"
          required
        />
        <div id="error_avatar" className="popup__input-error-message"></div>
        </div>
        <img
          // id="test"
          src={currentUser.avatar}
          alt="Фото профиля"
          className="profile__avatar preview__avatar"
        />
      </div>
    </PopupWithForm>
  );
}
