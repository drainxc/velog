import styled from "styled-components";

export const HeaderDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap");
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5em 3em 3em;
    .mainTitle {
      display: inline-flex;
      font-family: "Fira Sans", sans-serif !important;
      font-size: 25px;
      font-weight: 600;
      img {
        width: 30px;
        margin-right: 0.5em;
      }
    }
    .logo {
      width: 150px;
    }
    .search {
      width: 20px;
      margin-right: 1em;
    }
    .login {
      margin-right: 2em;
      color: #ffffff;
      background-color: #343a40;
      height: 2em;
      width: 5em;
      border-radius: 24px;
      border: none;
      font-size: 17px;
      font-weight: bolder;
    }
    .login:hover {
      background-color: #868E96;
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-start;
    margin-left: 3em;
    button {
      border: none;
      background-color: #f8f9fa;
      font-size: 20px;
      font-weight: bolder;
      margin-right: 20px;
      img {
        margin-right: 10px;
      }
    }
  }
  hr {
    display: flex;
    justify-content: flex-start;
    margin-left: 3em;
    background-color: #000000;
    height: 1px;
  }
  button,
  img {
    cursor: pointer;
  }
`;
