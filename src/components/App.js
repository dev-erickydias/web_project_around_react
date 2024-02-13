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
  const [selectedCard, setselectedCard] = useState(null);

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
          <div class="popup__form-inputs">
            <input  required type="text" value=""  minlength="2" maxlength="40" name="nome" id="nome" class="popup__form-input popup__form-name" />
            <span class="popup__form" id="span-input-name"></span>
          </div>

          <div class="popup__form-inputs">
            <input  required type="text" value="" name="job" id="job" class="popup__form-input popup__form-job" minlength="2" maxlength="200" />
            <span class="popup__form" id="span-input-job"></span>
          </div>
      </>
    </PopupWithForm>
    <PopupWithForm isOpen={isAddPlacePopupOpen} title="Novo Local" name="popup-add" onClose={closeAllPopups}>
      <>
          <div class="popup__form-inputs">
            <input type="text" required minlength="2" value="" name="name" id="input__title" class="popup__form-input popup__form-name add-title " maxlength="41" placeholder="Titulo" />
            <span class="popup__form" id="span-input-add-name"></span>
          </div>

          <div class="popup__form-inputs">
            <input required name="link" minlength="1" value="" id="input__image" class="popup__form-input popup__form-job add-image" type="url" placeholder="Link de imagem" />
            <span class="popup__form" id="span-input-add-image"></span>
          </div>
      </>
    </PopupWithForm>
    <PopupWithForm isOpen={isEditAvatarPopupOpen} title="Alterar a foto do perfil" name="popup_edit" onClose={closeAllPopups}>
        <label>
          <input id="avatar-input" placeholder="Link da Imagem" type="url" className="popup__form-input popup__form-input_avatar" name="image" required="" />
          <span class="popup__form" id="span-input-add-image"></span>
        </label>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    <Footer />
    </>
  );
}

export default App;
