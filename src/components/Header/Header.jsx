import './Header.scss';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo"/>
      <div className="header__menu">
        <button className="header__btn">Markets</button>
        <button className="header__btn">Trading ▾</button>
        <button className="header__btn">Derivatives ▾</button>
      </div>
      <div className="header__auth">
        <button className="header__btn">Войти</button>
        <button className="header__btn header__btn_white">Зарегестрироваться</button>
      </div>
    </header>
  );
}

export default Header;