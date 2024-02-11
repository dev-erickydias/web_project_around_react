import "./card.css"
import close from "../image/lixeira.png"
import unlick from "../image/unlike.png"
function Card ({cardData, onCardClick}) {
  const {link, name} = cardData
  const handleClick =()=>onCardClick(cardData)
  return (
    <li className="card">
      <img className="del opacursor" src={close} alt="icone de lixeira" />
      <img className="card__image" src={link}  onClick={handleClick} alt={name}/>
      <h2 className="card__title">{name}</h2>   
        <img className="card__unlick unlike" src={unlick} data-liked="false"  alt="lick" />
    </li>
  )
}
export default Card;