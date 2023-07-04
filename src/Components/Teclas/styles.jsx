import { styled } from "styled-components";


//--------------------------------------------------------------

export const Botao = styled.button`
  display: block;
  justify-content: center;
  align-items: center;

  width: ${(props)=> `${props.widthButton}rem`}; 
  height: ${(props)=> `${props.heightButton}rem`};  
  font-size: 25px;
  font-family: Poppins;
  font-weight: 500;


  background-color: ${(props)=> props.backgroundColor}; 
  border: none; 
  border-radius: 15px;
  color: ${(props)=> props.colorFont};

  cursor: pointer;

  

  &:hover{
   background-color: ${(props) => props.backgroundHover};
   border: 2.5px solid black;  
   color: white; 
   font-size: 28px;
  }

`



