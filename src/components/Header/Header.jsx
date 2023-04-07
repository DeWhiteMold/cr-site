import './Header.scss';
import logo from '../../images/logo.png';

function Header({onLogClick, onRegClick}) {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo"/>
      <div className="header__menu">
        <button className="header__btn" onClick={onLogClick}>Markets</button>
        <button className="header__btn" onClick={onLogClick}>Trading ▾</button>
        <button className="header__btn" onClick={onLogClick}>Derivatives ▾</button>
      </div>
      <div className="header__auth">
        <button className="header__btn" onClick={onLogClick}>Войти</button>
        <button className="header__btn header__btn_white" onClick={onRegClick}>Зарегестрироваться</button>
      </div>
    </header>
  );
}

export default Header;