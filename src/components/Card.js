import { useContext } from "react";
import { UserContext } from "../contexs/CurrentUserContext.js";
import close from "../image/lixeira.png"
function Card({ cardData, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(UserContext);
  const { link, name, owner, likes } = cardData;

  const isOwn = owner._id === currentUser._id;


  const cardDeleteButtonClassName = `opacursor ${
    !isOwn ? "del" : "del__hidden"
  }`;

  const isLiked = likes.some((like) => like._id === currentUser._id);
  const cardLikeButtonClassName = `card__unlike opacursor ${
    isLiked ? "card__like" : ""
  }`;

  console.log(likes)
  return (
    <li className="card">
      <img className={cardDeleteButtonClassName} src={close} alt="icone de lixeira" onClick={() => onCardDelete(cardData)}/>
      <img className="card__images" src={link}  onClick={()=>onCardClick(cardData)} alt={name}/>
      <h2 className="card__title">{name}</h2>   
        <button className={cardLikeButtonClassName} onClick={() => onCardLike(cardData)} data-liked="false"  alt="like" />
        <span className="elements__like-count">{likes.length}</span>
    </li>
  )
}
export default Card;