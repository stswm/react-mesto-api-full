import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function ConfirmDelete({ isOpen, onClose, onSubmit, isLoading, card }) {
  function handleSubmit(e){
    e.preventDefault()
    onSubmit(card)
  }
  return (
    <PopupWithForm
    name="confirm"
      title="Вы действительно хотите удалить карточку?"
      BTNtext={isLoading ? "Удаляем..." : "Удалено"}
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    >
    </PopupWithForm>
  )
}
