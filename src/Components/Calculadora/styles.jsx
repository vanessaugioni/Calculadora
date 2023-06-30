import styled from "styled-components";

//--------------------------------------------------------------

export const Container = styled.main`
  height: 90%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: Poppins;
  padding-top: 8rem;
  gap: 3rem;
  word-break: break-all;
`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  align-content: center ; 
  width: 300px;
  margin-left: 4rem;
  gap: 1rem;
  width: 300px;
  word-break: break-all;

  h1 {
    color: #818181;
    font-size: 24px;
    font-weight: 400px;
    width: 300px;
    word-break: break-all;
  }

  h2 {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    width: 391px;
  }
`;

export const Section = styled.main`
  display: flex;
  flex-direction: row;

  article {
    display: flex;
    flex-direction: column;
  }
`;

export const Area = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 0.5rem;
`;
