import './Main.scss'
import signImg from '../../images/sign.png'
import ambassador from '../../images/ambassador.png'

function Main() {
  return (
    <main className="main">
      <secttion className="banner">
        <span className="banner__caption">Совершаем прорыв, Вырываемся на свободу</span>
        <h1 className="banner__title">
          Самая 
          <span className="banner__span"><br/>высокотехнологическая<br/></span>
          биржа криптовалют в Японии
        </h1>
        <p className="banner__description">
          Крупнейший финансовый агрегатор по тогровым объёмам среди <span className="banner__span">{' частных инвесторов '}</span> 
          на азиатском рынке цифровых активов
        </p>
        <img src={ambassador} alt="ambassador" className="banner__ambassador-img" />
        <div className="banner__ambassador">
          <img src={signImg} alt="sign" className="banner__ambassador-sign" />
          <div className="banner__ambassador-text">
            <h3 className="banner__ambassador-title">Бренд-амбассрадор</h3>
            <p className="banner__ambassador-description">
            ТЕСТ ТЕСТ ТЕСТ-ТЕСТ <br/> -ТЕСТ ТЕСТ ТЕСТ
            </p>
          </div>
        </div>
      </secttion>
      <section className="content"></section>
    </main>
  );
}

export default Main;