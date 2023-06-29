import React from "react";
import { Botao } from "./styles";

export function Teclas(props) {
  const { backgroundColor, value, colorFont, widthButton, heightButton} = props;
  return (
   
      <Botao
        backgroundColor={backgroundColor}
        colorFont={colorFont}
        widthButton={widthButton}
        heightButton={heightButton}
      >
        {value}
      </Botao>
    
  );
}
