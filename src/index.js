import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { hydrate, render } from "react-dom";
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Самая высокотехнологическая биржа криптовалют в Японии"
        />
        <meta name="og:title" content="Самая высокотехнологическая биржа криптовалют в Японии" />
        <meta name="og:description" content="Крупнейший финансовый агрегатор по торговым объёмам среди частных инвесторов на азиатском рынке цифровых активов" />
        <meta name="og:image" content="https://avatars.mds.yandex.net/get-images-cbir/9060968/G-Feldlr-FCoCoknnblbCg1112/ocr" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
