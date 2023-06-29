import { styled } from "styled-components";

//--------------------------------------------------------------

export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props)=> `${props.widthButton}rem`}; 
  height: 3.875rem; 
  font-size: 32px;
  font-family: Poppins;
  font-weight: 500;

  background-color: ${(props)=> props.backgroundColor}; 
  border: none; 
  border-radius: 16px;
  color: ${(props)=> props.colorFont};

`;

