import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Header from "./Header"
import Main from "./Main"
import ImagePopup from "./ImagePopup"
import Footer from "./Footer"

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setselectedCard(card);
  }

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setselectedCard(null);
  }
  
  return (
    <>
    <Header />
    <Main onEditAvatarClick={handleEditAvatarClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onCardClick={handleCardClick} /> 
    <PopupWithForm isOpen={isEditProfilePopupOpen} title="Editar Perfil" name="popup" onClose={closeAllPopups}>
      <>
          <div className="popup__form-inputs">
            <input  required type="text" value=""  minLength="2" maxLength="40" name="nome" id="nome" className="popup__form-input popup__form-name" />
            <span className="popup__form" id="span-input-name"></span>
          </div>

          <div className="popup__form-inputs">
            <input  required type="text" value="" name="job" id="job" className="popup__form-input popup__form-job" minLength="2" maxLength="200" />
            <span className="popup__form" id="span-input-job"></span>
          </div>
      </>
    </PopupWithForm>
    <PopupWithForm isOpen={isAddPlacePopupOpen} title="Novo Local" name="popup-add" onClose={closeAllPopups}>
      <>
          <div className="popup__form-inputs">
            <input type="text" required minLength="2" value="" name="name" id="input__title" className="popup__form-input popup__form-name add-title " maxLength="41" placeholder="Titulo" />
            <span className="popup__form" id="span-input-add-name"></span>
          </div>

          <div className="popup__form-inputs">
            <input required name="link" minLength="1" value="" id="input__image" className="popup__form-input popup__form-job add-image" type="url" placeholder="Link de imagem" />
            <span className="popup__form" id="span-input-add-image"></span>
          </div>
      </>
    </PopupWithForm>
    <PopupWithForm isOpen={isEditAvatarPopupOpen} title="Alterar a foto do perfil" name="popup_edit" onClose={closeAllPopups}>
        <label>
          <input id="avatar-input" placeholder="Link da Imagem" type="url" className="popup__form-name popup__form-input_avatar" name="image" required="" />
          <span className="popup__form" id="span-input-add-image"></span>
        </label>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    <Footer />
    </>
  );
}

export default App;
