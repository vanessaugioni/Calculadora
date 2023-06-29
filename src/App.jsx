import React from "react";
import { Container, Section, Footer } from "./style";
import { Titulo } from "./Components/Titulo/index";
import { GlobalStyle } from "./styles/global";
import { TelaOff } from "./Components/TelaOff";

export default function App() {
  return (
    <Container>

      <Section>
        <Titulo />
        <TelaOff />
      </Section>

      <GlobalStyle />

      <Footer></Footer>

    </Container>
  );
}
