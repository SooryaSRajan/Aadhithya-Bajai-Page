import styled from "styled-components";
import Colors from "../../constants";

export const Button = styled.button`
  width: max-content;
  height: max-content;
  padding: ${(props) => props.extended ? "1rem 8rem" : "1rem 1rem"};
  max-width: 100%;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.color || Colors.secondary};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.hoverColor || Colors.secondaryHover};
  }
`
