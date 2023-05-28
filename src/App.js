import './App.scss';
import HeroPage from "./pages/hero/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useRef} from "react";
import {CustomerHappinessPage} from "./pages/CustomerHappinessPage/CustomerHappinessPage";
import NavBar from "./components/nav/NavBar";

function App() {
    const ref = useRef();

    const scroll = (to) => {
        if (ref.current) {
            ref.current.scrollTo(to);
        }
    };

    return (
      <div className="app">
          <NavBar/>
          <div className="app-content__root">
              <Parallax
                pages={4}
                ref={ref}
                className={"light"}
                style={{top: "0", left: "0"}}
              >
                  <ParallaxLayer offset={0} speed={0.2}>
                      <HeroPage/>
                  </ParallaxLayer>
                  <ParallaxLayer offset={1} speed={0.9}>
                      <CustomerHappinessPage/>
                  </ParallaxLayer>
              </Parallax>
          </div>
      </div>
    );
}

export default App;
