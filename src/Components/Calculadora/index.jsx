import React, { useEffect, useState } from "react";
import { Container, Content, Section, Area } from "./styles";
import { Teclas } from "../Teclas";
import { iconDelete} from "../../assets/export";

export function Calculadora() {
  const row1 = [
    {
      backgroundColor: "#4B4B4B6B",
      text: "Ac",
      value: "",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#c82513",
      type: "cancelar",
    },
    {
      backgroundColor: "#4B4B4B6B",
      value: "",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#c82513",
      Img: { iconDelete },
      type: "deletar",
    },
    {
      backgroundColor: "#740076",
      value: "/",
      text: "/",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#740060",
    },
    {
      backgroundColor: "#740076",
      value: "*",
      text: "*",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#740060",
    },
  ];

  const row2 = [
    {
      backgroundColor: "#363035",
      value: 7,
      text: "7",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: 9,
      text: "9",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: 8,
      text: "8",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#740076",
      value: "-",
      text: "-",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#740060",
    },
  ];

  const row3 = [
    {
      backgroundColor: "#363035",
      value: 4,
      text: "4",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: 5,
      text: "5",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: 6,
      text: "6",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#740076",
      value: "+",
      text: "+",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#740060",
    },
  ];

  const row4 = [
    {
      backgroundColor: "#363035",
      value: 1,
      text: "1",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: 2,
      text: "2",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: 3,
      text: "3",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#740076",
      value: "",
      text: "=",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#249c1e",
      type: "calc",
    },
  ];

  const row5 = [
    {
      backgroundColor: "#363035",
      value: "0",
      text: "0",
      colorFont: "#29A8FF",
      widthButton: 12.6,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
    {
      backgroundColor: "#363035",
      value: ".",
      text: ".",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#363030",
    },
  ];

  // ------------------------------
  // * FUNÇÃO MANTER UM HISTÓRICO DOS VALORES DIGITADOS.

  const [contador, setContador] = useState("");

  function funcButton(value) {
    setContador((prevState) => String(prevState) + String(value));
  }

  // ------------------------------
  // * FUNÇÃO PARA CANCELAR O CALCULO.

  function handleCancelar() {
    setContador("");
  }

  // ------------------------------
  // ! FUNÇÃO PARA APAGAR O ÚLTIMO O CARACTER DO CALCULO.

  // function handleDeletar(value) {
  //   const array = setContador.split("");
  //   setContador.substring(0,-1);
  // }

  // ------------------------------
  // * FUNÇÃO PARA FAZER OS CALCULOS.

  function handleCalcular() {
    const resultado = eval(String(contador));
    setContador(resultado)
  }


  return (
    <Container>
    
      <Content> 
        <div></div>
       
        <header>  
        
          <h1>{contador ? contador : 0}</h1>
        </header>

        <article>
          <h2>= 423</h2>
        </article>
      </Content>

      <Section>
        <article>
          <Area>
            {row1.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                backgroundHover={el.backgroundHover}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
                Img={el.Img}
                placeholder={el.placeholder}
                text={el.text}
                onClick={() =>
                  el.type && el.type === "cancelar"
                    ? handleCancelar(el.value)
                    : el.type === "deletar"
                    ? handleDeletar(el.value)
                    : el.type === "calc"
                    ? handleCalcular()
                    : funcButton(el.value)
                }
            
              />
            ))}
          </Area>

          <Area>
            {row2.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                backgroundHover={el.backgroundHover}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
                text={el.text}
                onClick={() =>
                  el.type && el.type === "cancelar"
                    ? handleCancelar(el.value)
                    : el.type === "deletar"
                    ? handleDeletar(el.value)
                    : el.type === "calc"
                    ? handleCalcular()
                    : funcButton(el.value)
                }
              />
            ))}
          </Area>

          <Area>
            {row3.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                backgroundHover={el.backgroundHover}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
                text={el.text}
                onClick={() =>
                  el.type && el.type === "cancelar"
                    ? handleCancelar(el.value)
                    : el.type === "deletar"
                    ? handleDeletar(el.value)
                    : el.type === "calc"
                    ? handleCalcular()
                    : funcButton(el.value)
                }
              />
            ))}
          </Area>

          <Area>
            {row4.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                backgroundHover={el.backgroundHover}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
                text={el.text}
                onClick={() =>
                  el.type && el.type === "cancelar"
                    ? handleCancelar(el.value)
                    : el.type === "deletar"
                    ? handleDeletar(el.value)
                    : el.type === "calc"
                    ? handleCalcular()
                    : funcButton(el.value)
                }
              />
            ))}
          </Area>

          <Area>
            {row5.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
                text={el.text}
                onClick={() =>
                  el.type && el.type === "cancelar"
                    ? handleCancelar(el.value)
                    : el.type === "deletar"
                    ? handleDeletar(el.value)
                    : el.type === "calc"
                    ? handleCalcular()
                    : funcButton(el.value)
                }
              />
            ))}
          </Area>
        </article>
      </Section> 
    </Container>
   
  );
}
