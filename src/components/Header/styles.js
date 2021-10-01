import styled from "styled-components";

export const HeaderDiv = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 3em;
    margin-bottom: 3em;
    border-radius: 12px;
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
      background-color: #ffffff;
      font-size: 20px;
      font-weight: bolder;
      img {
          margin-right: 10px;
      }
    }
  }
  button,img {
      cursor: pointer;
  }
`;
