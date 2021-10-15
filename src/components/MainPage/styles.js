import styled from "styled-components";

export const MainDiv = styled.div`
  /*   margin: 30px 100px; */
  display: flex;
  justify-content: center;
  .container {
    width: 1250px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    grid-row-gap: 30px;
    grid-column-gap: 20px;
    padding: 30px 0px 60px;
  }
`;
