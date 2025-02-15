import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";

function App() {
  return (
    <div className="page">
      <div className="background">
        <Header />
        <Search />
      </div>
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
