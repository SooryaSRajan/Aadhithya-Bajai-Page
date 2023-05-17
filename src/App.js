import './App.scss';
import NavBar from "./components/nav/NavBar";
import HeroPage from "./pages/hero/HeroPage";

function App() {
    return (
      <div className="app">
          <NavBar/>
          <div className="app-content__root">
              <HeroPage/>
          </div>
      </div>
    );
}

export default App;
