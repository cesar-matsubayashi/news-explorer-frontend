import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";

function App() {
  return (
    <div className="page">
      <div className="background">
        <Header />
        <Main />
      </div>
      <About />
    </div>
  );
}

export default App;
