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
  padding-top: 55rem;
  gap: 3rem;
  word-break: break-all;
`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 300px;

  gap: 1rem;
  width: 300px;
  word-break: break-all;

  div.sombra1 {
    color: #fff;
    background: #58c8f9;
    border-radius: 100px;
    height: 5rem;
    width: 9rem;
    filter: blur(35px);
    margin-bottom: 4rem;
    margin-left: 9rem;

  }

  header {
    display: flex;
    justify-content: center;

    h1 {
      display: flex;
      flex-direction: row;
      justify-content: end;
      color: #818181;
      font-size: 24px;
      font-weight: 400px;
      width: 260px;
      word-break: break-all;
    }
  }
  h2 {
    display: flex;
    justify-content: end;
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    width: 260px;
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

export const Style = styled.div`

display: flex;
flex-direction:row; 
margin-left: 4rem; 


div.sombra3 {
    color: #fff;
    background: #FF2BEA;
    border-radius: 100px;
    height: 5rem;
    width: 5rem;
    filter: blur(35px);
    margin-top: 1rem;
    margin-right: 7rem;
  }

  div.sombra2 {
    color: #fff;
    background: #58c8f9;
    border-radius: 100px;
    height: 5rem;
    width: 9rem;
    filter: blur(35px);
    margin-bottom: 6rem;
    margin-right:  1rem;
  }


`;
