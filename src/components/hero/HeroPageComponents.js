import styled from "styled-components";

export const HeroPageContainer = styled.div`
  width: 50%;
  height: 100%;
  flex: 1;

  &:first-child {
    margin-left: 40px
  }
`

export const HeroPageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  &:before {
    content: "";
  }

  &:after {
    content: "";
  }
`

export const Image = styled.img`
  height: 90%;
  position: relative;
  left: 0;
  transform: rotateY(180deg)
`

export const Title = styled.h1`
  align-self: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 110px;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 820px) {
    font-size: 96px;
  }

  @media (max-width: 700px) {
    font-size: 64px;
  }

  @media (max-width: 540px) {
    font-size: 48px;
  }
`;

export const MottoText = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: ${(props) => props.color};

  &:before {
    content: '"';
  }

  &:after {
    content: '"';
  }

  @media (max-width: 820px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }

  @media (max-width: 540px) {
    font-size: 8px;
  }
`;


export function HeroImage({url}) {
    return <ImageContainer>
        <Image src={url} alt="hero"/>
    </ImageContainer>


}