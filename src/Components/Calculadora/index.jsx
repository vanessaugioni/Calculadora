import React, { useEffect, useState } from "react";
import { Container, Content, Section, Area } from "./styles";
import { Teclas } from "../Teclas";
import { iconDelete, iconFav } from "../../assets/export";

export function Calculadora() {
  const row1 = [
    {
      backgroundColor: "#4B4B4B6B",
      value: "Ac",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#4B4B4B6B",
      value: "X",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#c82513",
      Img: { iconDelete },
    },
    {
      backgroundColor: "#740076",
      value: "/",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#740076",
      value: "*",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
    },
  ];

  const row2 = [
    {
      backgroundColor: "#363035",
      value: 7,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 9,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 8,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#740076",
      value: "-",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
    },
  ];

  const row3 = [
    {
      backgroundColor: "#363035",
      value: 4,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 5,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 6,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#740076",
      value: "+",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
    },
  ];

  const row4 = [
    {
      backgroundColor: "#363035",
      value: 1,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 2,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 3,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#740076",
      value: "=",
      colorFont: "#A5A5A5",
      widthButton: 3.875,
      heightButton: 3.875,
      backgroundHover: "#249c1e",
    },
  ];

  const row5 = [
    {
      backgroundColor: "#363035",
      value: "0",
      colorFont: "#29A8FF",
      widthButton: 12.6,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: ".",
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
  ];

  const [contador, setContador] = useState(0);

  function funcButton(value) {
    console.log(value);
    setContador((prevState) => value + prevState);
  }

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  return (
    <Container>
      <Content>
        <header>
          <h1>{contador}</h1>
        </header>

        <article>
          <h2>231</h2>
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
                onClick={() => funcButton(el.value)}
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
                onClick={() => funcButton(el.value)}
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
                onClick={() => funcButton(el.value)}
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
                onClick={() => funcButton(el.value)}
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
                onClick={() => funcButton(el.value)}
              />
            ))}
          </Area>
        </article>
      </Section>
    </Container>
  );
}
