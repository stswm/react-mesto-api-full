import React from "react";
import ok from "../../img/SuccessPic.svg";
import failed from "../../img/FailPic.svg";

export default function InfoTooltip({onClose, isOpen, isRegistrate}) {
  return (
    <div className={`popup popup_type_Info ${isOpen ? 'popup_opend' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close buttonEffect"
          onClick={onClose}
        />
        <div className="InfoTooltipShell">
          <img className="InfoTooltip__Img" 
          src={isRegistrate ? ok : failed}
          alt={isRegistrate ? "success" : "failed" } />
          <p className="InfoTooltip__text">
          {isRegistrate
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
          </p>
        </div>
      </div>
    </div>
  );
}
