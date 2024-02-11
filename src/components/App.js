import Card from "./Card";
import Header from "./Header"

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
    <Card />
    </>
  );
}

export default App;
