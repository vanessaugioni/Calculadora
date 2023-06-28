import React from "react";
import { Container, Section, Footer } from "./style";
import { Titulo } from "./Components/Titulo/index";
import { GlobalStyle } from "./styles/global";
import { TelaOn } from "./Components/TelaOn";

export default function App() {
  return (
    <Container>

      <Section>
        <Titulo />
        <TelaOn />
      </Section>

      <GlobalStyle />

      <Footer></Footer>

    </Container>
  );
}
