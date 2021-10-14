import styled from "styled-components";

export const PostDiv = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 4px;
  width: 100%;
  height: 365px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.1);
    transform: translateY(-20px);
  }
  img {
    width: 100%;
    height: 175px;
    object-fit: cover;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    text-decoration-line: none;
  }
  .contents {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    width: 100%;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
  }
  .post {
    height: 90px;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .date {
    color: #868e96;
    font-size: 12px;
    margin-left: 10px;
  }
  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgb(248, 249, 250);
  }
  .writer {
    margin-left: 10px;
  }
`;
