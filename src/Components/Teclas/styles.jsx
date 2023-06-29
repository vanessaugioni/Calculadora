import { styled } from "styled-components";

//--------------------------------------------------------------

export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props)=> `${props.widthButton}rem`}; 
  height: ${(props)=> `${props.heightButton}rem`};  
  font-size: 30px;
  font-family: Poppins;
  font-weight: 500;

  background-color: ${(props)=> props.backgroundColor}; 
  border: none; 
  border-radius: 16px;
  color: ${(props)=> props.colorFont};

`;

