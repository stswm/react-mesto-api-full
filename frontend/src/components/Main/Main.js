import React, { useContext } from "react";
import Card from "../Card/Card";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-editshell">
          <button
            type="button"
            className="profile__avatar-edit-button buttonEffect"
            onClick={onEditAvatar}
          >
            <img
              src={currentUser.avatar}
              alt="Фото профиля"
              className="profile__avatar"
            />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button buttonEffect"
            onClick={onEditProfile}
          ></button>
          <h2 className="profile__about">{currentUser.about}</h2>
        </div>
        <button
          type="button"
          className="profile__add-button buttonEffect"
          onClick={onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
