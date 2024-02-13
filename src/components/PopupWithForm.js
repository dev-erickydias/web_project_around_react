function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup ${name} ${isOpen ? "popop_opened" : ""}`} id="popup-card-form">
      <div className="overlay" id="overlay-add"></div>
      <form id="first">
        <div className="popup__form-itens" id="form__itens">
          <div className="popup__form-close" id="close-add">
            <img src="<%= require('./image/Close__Icon.png')%>" alt="Botão que feixa a caixa de edição" onClick={onClose}/>
          </div>
          <h2 className="popup__form-title"> {title} </h2> {children}
          <div className="popup__form-inputs">
            <input type="text" required minlength="2" value="" name="name" id="input__title" className="popup__form-input popup__form-name add-title " maxlength="41" placeholder="Titulo"/>
            <span className="popup__form" id="span-input-add-name"></span>
          </div>
          <div className="popup__form-inputs">
            <input required name="link" minlength="1" value="" id="input__image" className="popup__form-input popup__form-job add-image" type="url" placeholder="Link de imagem" />
            <span className="popup__form" id="span-input-add-image"></span>
          </div>
          <button id="add__submit" className="button button-submit" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
export default PopupWithForm;
