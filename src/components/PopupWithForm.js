function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup ${name} ${isOpen ? "popop_opened" : ""}`} id="popup-card-form">
      <div className="overlay" id="overlay-add"></div>
      <form id="first">
        <div className="popup__form-itens" id="form__itens">
          <div className="popup__form-close" id="close-add">
            <img src="<%= require('./image/Close__Icon.png')%>" alt="Botão que feixa a caixa de edição" onClick={onClose}/>
          </div>
          <h2 className="popup__form-title"> {title} </h2> 
          {children}
          <button id="add__submit" className="button button-submit" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
export default PopupWithForm;
