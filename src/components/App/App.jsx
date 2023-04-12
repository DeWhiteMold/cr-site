import './App.scss';
import { useState } from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import AuthPopUp from "../AuthPopUp/AuthPopUp";

function App() {
  const [popupType, setPopupType] = useState(null);

  const loginPopup = {
    type: 'login',
    title: 'Вход',
    btnText: 'Войти'
  }

  const regPopup ={
    type: 'registration',
    title: 'Регистрация',
    email: true,
    uninumber: true,
    btnText: 'Создать'   
  }

  function handlePopupClose() {
    setPopupType(null);
  }

  function handleLogOpen() {
    setPopupType(loginPopup);
  }

  function handleRegOpen() {
    setPopupType(regPopup);
  }

  return (
    <div className="app">
      <Header onLogClick={handleLogOpen} onRegClick={handleRegOpen} />
      <Main />
      <AuthPopUp popupType={popupType} onClose={handlePopupClose}/>
    </div>
  );
}

export default App;
