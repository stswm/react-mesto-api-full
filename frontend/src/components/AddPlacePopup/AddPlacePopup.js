import React, {useState, useEffect} from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'


export default function AddPlacePopup({ isOpen, onClose, onSubmit, isLoading }) {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  
  function handleSubmit(e){
    e.preventDefault()
    onSubmit({name,link})
  }
  useEffect(()=>{
    if (isOpen){
      setName('')
      setLink('')
    }
  },[isOpen])

  function handeNameChange(e){
    setName(e.target.value)
  }
  function handeLinkChange(e){
    setLink(e.target.value)
  }

  return (
  <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    name="add-card"
    title="Новое место"
    BTNtext={isLoading ? "Добавляем..." : "Добавить"}
  >
    <input
      name="name"
      id="card-name"
      className="popup__input popup__input_card-name"
      minLength="2"
      maxLength="30"
      placeholder=" Название"
      type="text"
      value={name}
      onChange={handeNameChange}
      required
    />
    <div
      id="error_card-name"
      className="popup__input-error-message"
    ></div>
    <input
      name="link"
      id="card-link"
      className="popup__input popup__input_card-link"
      placeholder=" Ссылка на картинку"
      type="url"
      value={link}
      onChange={handeLinkChange}
      required
    />
    <div
      id="error_card-link"
      className="popup__input-error-message"
    ></div>
  </PopupWithForm>
  )
}
