import './AuthPopUp.scss'
import { useState } from 'react';

function AuthPopUp({popupType: popup, onClose}) {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [uniNumberValue, setUniNumberValue] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [uniNumberError, setUniNumberError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const regexp = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g

  function handleLoginChange(e) {
    if(regexp.test(e.target.value)) {
      setLoginValue(e.target.value);
      setLoginError('');
      setSubmitError('');
    } else {
      setLoginError('Введите логин без спецсимволов и пробелов');
    }
  }

  function handlePasswordChange(e) {
    if(regexp.test(e.target.value)) {
      setPasswordValue(e.target.value);
      setPasswordError('');
      setSubmitError('');
    } else {
      setPasswordError('Введите пароль без спецсимволов и пробелов');
    }
  }
  
  function handleUniNumberChange(e) {
    if(regexp.test(e.target.value)) {
      setUniNumberValue(e.target.value);
      setUniNumberError('');
      setSubmitError('');
    } else {
      setUniNumberError('Только цифры');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitError('Что-то пошло не так')
  }

  function handleClose() {
    onClose()
    setLoginValue('');
    setPasswordValue('');
    setUniNumberValue('');
    setSubmitError('');
    setLoginError('');
    setPasswordError('');
    setUniNumberError('');
  }
  
  return (
    <div className={`popup ${!popup && 'popup_hidden'}`}>
      <form className="popup__form" onSubmit={handleSubmit}>
        <h2 className="popup__title">{popup?.title}</h2>
        <input type='text' className="popup__input" placeholder="Логин" 
          value={loginValue} onChange={handleLoginChange}/>
        <span className="popup__error">{loginError}</span>
        <input type='password' className="popup__input" placeholder="Пароль" 
          value={passwordValue} onChange={handlePasswordChange}/>
        <span className="popup__error">{passwordError}</span>
        <input type='text' className="popup__input" placeholder="Уникальный номер" 
          value={uniNumberValue} onChange={handleUniNumberChange}/>
        <span className="popup__error">{uniNumberError}</span>
        <button className="popup__submit">{popup?.btnText}</button>
        <span className="popup__error">{submitError}</span>
      </form>
      <div className="overlay" onClick={handleClose}/>
    </div>
  );
}

export default AuthPopUp;