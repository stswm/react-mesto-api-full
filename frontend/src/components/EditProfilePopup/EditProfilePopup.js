import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function EditProfilePopup( {isOpen, onClose, onSubmit, isLoading } ) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = useContext(CurrentUserContext)

  function handleSubmit(e){
    e.preventDefault();
    onSubmit({name, about: description})
  }

  useEffect(()=>{
    if (isOpen){
      setName(currentUser.name)
      setDescription(currentUser.about)
    }
  },[isOpen, currentUser])

  return (
<PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        name="type_edit"
        title="Редактировать профиль"
        BTNtext={isLoading ? "Сохраняем..." : "Сохранить"}
      >
        <input
          name="name"
          id="name"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          placeholder=" Введите Имя"
          type="text"
          value={` ${name}`}
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <div id="error_name" className="popup__input-error-message"></div>
        <input
          name="about"
          id="about"
          className="popup__input popup__input_type_about"
          minLength="2"
          maxLength="200"
          placeholder=" Немного о себе"
          type="text"
          value={` ${description}`}
          onChange={(e)=>setDescription(e.target.value)}
          required
        />
        <div id="error_about" className="popup__input-error-message"></div>
      </PopupWithForm>
  );
}
