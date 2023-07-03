import React from "react";
import { Botao } from "./styles";


export function Teclas(props) {
  const {
    backgroundColor,
    backgroundHover,
    value,
    colorFont,
    widthButton,
    heightButton,
    handleButton,
    Img,
    text,
    ...rest
  } = props;

  const srcImage = Img && Object.values(Img)[0]

  return (
    <Botao
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
      colorFont={colorFont}
      widthButton={widthButton}
      heightButton={heightButton}
      text={text}
      

      {...rest}
    >
      {Img ? <img src={srcImage} alt="" /> : text}
    </Botao>
  );
}
