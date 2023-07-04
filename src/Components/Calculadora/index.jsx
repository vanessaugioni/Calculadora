import React, { useEffect, useState } from "react"; // Importação para uso do React; 
import { Container, Content, Section, Area, Style } from "./styles"; // Importação do styled-components
import { Teclas } from "../Teclas"; // Importação de um componente
import { iconDelete} from "../../assets/export"; // Importação de uma imagem 

export function Calculadora() {  // Props para configurar os botões
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
      value: 8,
      text: "8",
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
  // ? FUNÇÃO MANTER UM HISTÓRICO DOS VALORES DIGITADOS.

  const [contador, setContador] = useState(""); // Guardar o histórico da conta 

  const [result, setResult] = useState("");  // Guardar o resuly=tadi da cineta  histórico da conta 

  function funcButton(value) { //Função para guardar as informações e mostrar o hostórico de dígitos. 
    setContador((prevState) => String(prevState) + String(value));
  }

  // ------------------------------
  // ? FUNÇÃO PARA CANCELAR O CALCULO

  function handleCancelar() { // Cancelar(zerrar) o cálculo de 
    setContador("") // Zerar valores do calculo. 
    setResult("") // Zerar valor do resultado. 
  }

  // ------------------------------
  // ? FUNÇÃO PARA APAGAR O ÚLTIMO O CARACTER DO CALCULO.
  // Excluir último caracter do cúlculo. 

  function handleDeletar() {
    const array = contador.substring(0, contador.length -1)
    setContador(array)
  }

  // ------------------------------
  // ? FUNÇÃO PARA FAZER OS CALCULOS.
 //Função utilizada para fazer os cálculos dos valorees digitados

  function handleCalcular() {
    const resultado = eval(String(contador));
    setResult(resultado)
    
  }

  return (  // Retorno com as respostas e componentes
    <Container>
    
      <Content> 
        <div className="sombra1">""</div> // Sombra de estilização 
       
        <header>  
        
          <h1>{contador ? contador : 0}</h1> 
        </header>

        <article>
          <h2>= {result ? result : 0}</h2>
        </article>
      </Content>


      <Section>
        <article>
          <Area>
            {row1.map((el) => (
              <Teclas // Propriedades do botão!
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
      <Style> 
      <div className="sombra2">""</div> // Sombra de estilização 
      <div className="sombra3">""</div> // Sombra de estilização 
      </Style>
    </Container>
   
  );
}
