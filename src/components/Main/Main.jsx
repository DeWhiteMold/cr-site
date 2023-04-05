import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Api from '../../utils/api';
import signImg from '../../images/sign.png'
import ambassador from '../../images/ambassador.png'
import btcIcon from '../../images/bitcoin.png'
import ethIcon from '../../images/ethirium.png'

import 'swiper/scss';
import "swiper/scss/pagination";
import './Main.scss'


function Main() {
  const [btcObj, setBtcObj] = useState('');
  const [ethObj, setEthObj] = useState('');
  const api = new Api(); 

  function f() {
    api.getBtc()
      .then((res) => {console.log(res);})
      api.getEth()
        .then((res) => {console.log(res);})
  }

  useEffect(() => {
    api.getBtc()
      .then((res) => {
        setBtcObj(res.data.amount)
      })
    api.getEth()
      .then((res) => {
        setEthObj(res.data.amount)
      })
  }, [])
  
  return (
    <main className="main">
      <section className="banner">
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
      </section>
      <section className="content">
        <div className="currencyes">
          <div className="currency">
            <img src={btcIcon} alt="icon" className="currency__logo" />
            <span className="currency__name">BTC/USD</span>
            <span className="currency__value">{btcObj} $</span>
          </div>
          <div className="currency">
            <img src={ethIcon} alt="icon" className="currency__logo" />
            <span className="currency__name">ETH/USD</span>
            <span className="currency__value">{ethObj} $</span>
          </div>
        </div>
        <div className="cards">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination ={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
          >
            <SwiperSlide>
              <div className="card">
                <h3 className="card__title">Заголовок</h3>
                <p className="card__text">
                  ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ 
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h3 className="card__title">Заголовок</h3>
                <p className="card__text">
                  ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ 
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h3 className="card__title">Заголовок</h3>
                <p className="card__text">
                  ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ 
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h3 className="card__title">Заголовок</h3>
                <p className="card__text">
                  ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ ТЕСТ 
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Main;