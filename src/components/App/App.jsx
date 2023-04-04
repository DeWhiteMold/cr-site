import './App.scss';
import Header from "../Header/Header";
import Main from "../Main/Main";
import AuthPopUp from "../AuthPopUp/AuthPopUp";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <AuthPopUp />
    </div>
  );
}

export default App;
