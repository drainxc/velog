import React from "react";
import Container from "./components/Container";
import GlobalStyle from "./styles";

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
