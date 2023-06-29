import React, { useState } from "react";
import { Container, Content, Section, Area } from "./styles";
import { Teclas } from "../Teclas";

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
    },
    {
      backgroundColor: "#740076",
      value: "/",
      colorFont: "#FFFFFF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#740076",
      value: "*",
      colorFont: "#FFFFFF",
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
      colorFont: "#FFFFFF",
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
      colorFont: "#FFFFFF",
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
      colorFont: "#FFFFFF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
  ];

  const row5 = [
    {
      backgroundColor: "#363035",
      value: "0",
      colorFont: "#29A8FF",
      widthButton: 12,
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

  return (
    <Container>
      <Content>
        <header>
          <h1>6000/2+3227*2</h1>
        </header>

        <article>
          <h2>= 12,454</h2>
        </article>
      </Content>

      <Section>
        <article>
          
          <Area>
            {row1.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
              />
            ))}
          </Area>

          <Area>
            {row2.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
              />
            ))}
          </Area>

          <Area>
            {row3.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
              />
            ))}
          </Area>
          
          <Area>
            {row4.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
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
              />
            ))}
          </Area>
        </article>
      </Section>
    </Container>
  );
}
