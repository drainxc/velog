import styled from "styled-components";

export const PostDiv = styled.div`
  .main {
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 12px;
    width: 275px;
    height: 400px;
  }
  img {
    width: 275px;
    height: 175px;
    object-fit: cover;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
    width: 275px;
    margin-left: 5px;
  }
  .contents {
    font-size: 15px;
    width: 275px;
    margin-left: 5px;
  }
  .post {
    height: 165px;
  }
  hr {
    width: 275px;
  }
  .writer {
    margin-left: 5px;
  }
  .increase {
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 12px;
    width: 275px;
    height: 400px;
    transition: all 0.1s ease;
    transform: scale(1.1);
    box-shadow: 0px 0px 10px grey;
  }
`;
