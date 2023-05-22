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

function HeroPage() {
    return (
      <div className="hero-page">
          <div className="hero-backdrop">
              <HeroPageContainer>
                  <HeroPageContent>
                      <Title>
                          Aadhithya Bajaj
                      </Title>
                      <MottoText>
                          Caring for bikes since 2006
                      </MottoText>
                      <Button>
                          Book Now
                      </Button>
                  </HeroPageContent>
              </HeroPageContainer>
              <HeroPageContainer>
                  <HeroImage url={logo}/>
              </HeroPageContainer>
          </div>
      </div>
    );
}

export default HeroPage;
