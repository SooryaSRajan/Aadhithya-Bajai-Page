import {
    BajajImage,
    Container,
    ContainerInner,
    ContainerOuter, Content, Title
} from "../../components/CustomerHappinessPage/CustomerHappinessPage";

import bajajImage from "../../assets/images/bajaj.png";

export function CustomerHappinessPage() {

    return (
      <Container>
          <ContainerOuter>
              <ContainerInner>
                  <BajajImage src={bajajImage}/>
              </ContainerInner>
              <ContainerInner>
                  <Title>
                      CUSTOMER HAPPINESS: OUR SUCCESS METRIC!
                  </Title>
                  <Content>
                      At AADHITHYA MOTORS , we firmly believe that customer happiness is the key to our success. Since our establishment in 2006, we have been committed to creating a positive and fulfilling experience for each and every customer we serve. With a strong foundation built on trust, integrity, and exceptional service, we have expanded our presence to 21 branches across Tamil Nadu. Our relentless dedication to customer satisfaction drives us to constantly innovate and improve our products and services. We strive to exceed expectations, listen attentively to our customers' needs, and provide personalized solutions that truly make a difference. Your happiness is not just a goal for us; it is the very metric by which we measure our achievements. Join us on this incredible journey towards customer happiness and let us create memorable experiences together.
                  </Content>
              </ContainerInner>
          </ContainerOuter>
      </Container>
    )

}