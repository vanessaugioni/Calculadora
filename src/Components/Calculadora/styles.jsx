import styled from "styled-components";

//--------------------------------------------------------------

export const Container = styled.main`
  height: 100%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Poppins;

`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 


  h1 {
    color: #818181;
    font-size: 24px;
    font-weight: 400;
  }

  h2 {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
  }
`;

export const Section = styled.main`
display: flex;
gap: 4rem; 


 
`;
