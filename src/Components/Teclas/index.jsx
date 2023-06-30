import React from "react";
import { Botao } from "./styles";
import { iconDelete } from "../../assets/export";

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
      {...rest}
    >
      {Img ? <img src={srcImage} alt="" /> : value}
    </Botao>
  );
}
