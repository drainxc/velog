import styled from "styled-components";

export const HeaderDiv = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 3em;
    margin-bottom: 3em;
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
      background-color: #000000;
      height: 2.5em;
      width: 6em;
      border-radius: 24px;
      border: none;
      font-weight: bolder;
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-start;
    margin-left: 3em;
    button {
      border: none;
      background-color: #F8F9FA;
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
