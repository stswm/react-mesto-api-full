import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_visible" : "element__delete_hiden"
  } buttonEffect`;
  const cardLikeButtonClassName = `element__heart ${
    isLiked ? "element__heart_active" : ""
  } buttonEffect`;
  return (
    <li className="element">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={() => onCardDelete(card)}
      ></button>
      <img
        className="element__pic"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <h2 className="element__text">{card.name}</h2>
      <div className="likeShell">
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => onCardLike(card)}
        ></button>
        <span className="element__heart-count">{card.likes.length}</span>
      </div>
    </li>
  );
}

export default Card;
