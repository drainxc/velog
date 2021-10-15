import React from "react";
import Container from "./components/Container";
import GlobalStyle from "./style/styles";

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container />
      </>
    );
  }
}
