import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";
import edtImage from "../image/Lapiz__icon.png";
import addImage from "../image/add__icon.png";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((error) => {
        console.error("Error Of Get User", error);
      });
  }, []);
  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((error) => {
        console.error("Erro Of Get Info Cards", error);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <div className="profile_edit__conetener">
          <img
            src={userAvatar}
            onClick={onEditAvatarClick}
            className="profile__image opacursor"
            alt="profile picture"
          />
          </div>
          
          
          <div className="profile__titles">
            <div className="profile__content">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={onEditProfileClick} className="profile__button opacursor abrir">
                <img
                  src={edtImage}
                  className="edit"
                  alt="icone de um lapiz"
                />
              </button>
            </div>
            <h2 className="profile__subtitle">{userDescription}</h2>
          </div>
        </div>
        <button
          onClick={onAddPlaceClick}
          className="button profile__button-add opacursor abrir"
        >
          <img
            src={addImage}
            alt="simbolo de adição"
            className="button__icon"
          />
        </button>
      </section>
      <ul className="cards">
        {cards.map((card) => (
          <Card cardData={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </ul>
      <section className="popup popup_delete">
        <div className="popup__container popup__container_delete">
          <button type="button" className="popup__close-icon">
            <img
              className="popup__close-icon-img"
              src="./images/close-icon.png"
              alt="ìcone para fechar o pop-up"
            />
          </button>
          <h2 className="popup__title">Tem certeza?</h2>
          <button type="button" className="popup__button-submit">
            Sim
          </button>
        </div>
      </section>
    </>
  );
}
export default Main;
