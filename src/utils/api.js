export default class Api {
  constructor() {
    this._url = 'https://api.coinbase.com/v2/prices'; 
  }
  
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getBtc() {
    return fetch(`${this._url}/BTC-USD/spot`)
      .then(res => {return this._getResponse(res)})
  }

  getEth() {
    return fetch(`${this._url}/ETH-USD/spot`)
      .then(res => {return this._getResponse(res)})
  }
}