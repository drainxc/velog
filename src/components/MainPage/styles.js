import styled from "styled-components";

export const MainDiv = styled.div`
  /*   margin: 30px 100px; */
  .container {
    width: 1500px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 20px;
    padding-bottom: 30px;
  }
`;
