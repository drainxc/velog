import styled from "styled-components";

export const PostDiv = styled.div`
  .main {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 12px;
    width: 300px;
    height: 400px;
    background-color: #ffffff;
  }
  img {
    width: 300px;
    height: 175px;
    object-fit: cover;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
    width: 300px;
    margin-left: 5px;
    text-decoration-line: none;
  }
  .contents {
    font-size: 15px;
    width: 300px;
    margin-left: 5px;
  }
  .post {
    height: 165px;
  }
  hr {
    width: 300px;
    background-color: #000000;
  }
  .writer {
    margin-left: 5px;
  }
  .increase {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 12px;
    width: 300px;
    height: 400px;
    background-color: #ffffff;
    transition: all 0.1s ease;
    transform: scale(1.1);
    box-shadow: 0px 0px 20px rgb(180, 180, 180);
  }
`;
