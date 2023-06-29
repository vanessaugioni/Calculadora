import React, { useState } from "react";
import { Container, Content, Section } from "./styles";
import { Teclas } from "../Teclas";

export function Calculadora() {
  const array2 = [
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
      backgroundColor: "#363035",
      value: 7,
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
      backgroundColor: "#363035",
      value: 5,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 4,
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
      backgroundColor: "#363035",
      value: 2,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#363035",
      value: 1,
      colorFont: "#29A8FF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
  ];

  const array1 = [
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

  const array3 = [
    {
      backgroundColor: "#363035",
      value: "0",
      colorFont: "#29A8FF",
      widthButton: 9,
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

  const array4 = [
    {
      backgroundColor: "#740076",
      value: "-",
      colorFont: "#FFFFFF",
      widthButton: 3.875,
      heightButton: 3.875,
    },
    {
      backgroundColor: "#740076",
      value: "+",
      colorFont: "#FFFFFF",
      widthButton: 3.875,
      heightButton: 6,
    },
    {
      backgroundColor: "#740076",
      value: "=",
      colorFont: "#FFFFFF",
      widthButton: 3.875,
      heightButton: 6,
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
          <div>
            {array1.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
              />
            ))}
          </div>
          <div>
            {array2.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
              />
            ))}
          </div>
          <div>
            {array3.map((el) => (
              <Teclas
                backgroundColor={el.backgroundColor}
                value={el.value}
                colorFont={el.colorFont}
                widthButton={el.widthButton}
                heightButton={el.heightButton}
              />
            ))}
          </div>
        </article>

        <div>
          {array4.map((el) => (
            <Teclas
              backgroundColor={el.backgroundColor}
              value={el.value}
              colorFont={el.colorFont}
              widthButton={el.widthButton}
              heightButton={el.heightButton}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
