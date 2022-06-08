import useClose from "../../utils/useClose"


function ImagePopup({card, onClose}){
  useClose(card.link, onClose)
  return(
    <section className={`preview preview_pop popup 
    ${card.link ? 'popup_opend' : ''}
    `}>
    <div className="popup__shell">
      <button type="button" className="popup__close buttonEffect" onClick={onClose}></button>
      <img className="preview__img" src={card.link} alt={card.name}/>
      <figcaption className="preview__caption">{card.name}</figcaption>
    </div>
  </section>
  )
}
export default ImagePopup