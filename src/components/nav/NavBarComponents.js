import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const IconImage = styled.img`
  margin-left: 20px;
  height: 100%;
  object-fit: contain;
`

export function Icon({src}) {
    return (
      <IconContainer>
          <IconImage src={src} alt="icon"/>
      </IconContainer>
    );
}