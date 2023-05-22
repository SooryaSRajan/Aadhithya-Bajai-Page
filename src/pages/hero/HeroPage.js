import './HeroPage.scss';
import {
    HeroImage,
    HeroPageContainer,
    HeroPageContent,
    MottoText,
    Title
} from "../../components/hero/HeroPageComponents";
import logo from "../../assets/images/hero.png";
import {Button} from "../../components/button/Button";
import useElementOnScreen from "../../animations";
import {useEffect, useRef, useState} from "react";

function HeroPage() {
    const ref = useRef(null);
    let isOnScreen = useElementOnScreen(ref);
    let [onScreen, setOnScreen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOnScreen(isOnScreen);
        }, 200);
    }, [isOnScreen]);

    return (
      <div className="hero-page">
          <div className="hero-backdrop">
              <HeroPageContainer>
                  <HeroPageContent>
                      <Title ref={ref}
                             style={{
                                 opacity: onScreen ? 1 : 0,
                                 translate: onScreen ? "none" : "0 -5rem",
                                 transition: "600ms ease-in-out",
                             }}>
                          Aadhithya<br/>Bajaj
                      </Title>
                      <MottoText ref={ref}
                                 style={{
                                     opacity: onScreen ? 1 : 0,
                                     translate: onScreen ? "none" : "0 -5rem",
                                     transition: "600ms ease-in-out",
                                 }}>
                          Bikes and Customer satisfaction is our priority. Caring for bikes since 2006.
                      </MottoText>
                      <Button ref={ref}
                              extended={true}
                              style={{
                                  opacity: onScreen ? 1 : 0,
                                  translate: onScreen ? "none" : "0 5rem",
                                  transition: "600ms ease-in-out",
                              }}>
                          Book Now
                      </Button>
                  </HeroPageContent>
              </HeroPageContainer>
              <HeroPageContainer ref={ref}
                                 style={{
                                     opacity: onScreen ? 1 : 0,
                                     translate: onScreen ? "none" : "40rem 0rem",
                                     transition: "600ms ease-in-out",
                                 }}>
                  <HeroImage url={logo}/>
              </HeroPageContainer>
          </div>
      </div>
    );
}

export default HeroPage;
