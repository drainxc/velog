import styled from "styled-components";

export const PostDiv = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 12px;
  width: 275px;
  height: 400px;
  img {
    width: 275px;
    height: 175px;
    object-fit: cover;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
  }
  .contents {
    font-size: 15px;
  }
  .post {
    height: 165px;
  }
`;
