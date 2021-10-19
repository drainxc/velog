import styled from "styled-components";

export const MainDiv = styled.div`
  /*   margin: 30px 100px; */
  display: flex;
  justify-content: center;
  .container {
    width: 1250px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 20px;
    padding: 30px 0px 60px;
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);    
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
