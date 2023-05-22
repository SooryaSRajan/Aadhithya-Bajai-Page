import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerOuter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const ContainerInner = styled.div`
  flex: 1;
  padding: 0 8em 0 8em;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BajajImage = styled.img`
  margin: 0;
  padding: 0;
  scale: 1.5;
`

export const Title = styled.h1`
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.color};
  padding: 0;
  cursor: pointer;
  margin: 0 0 20px;
`

export const Content = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: justify;
  color: ${(props) => props.color};
  margin: 0;
  padding: 0;
`
