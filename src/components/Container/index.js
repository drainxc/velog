import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header";
import MainPage from "../MainPage";
import PostDetail from "../PostDetail";
import * as S from "./styles";

export default function Container() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <S.MainPageDiv>
              <Header classname="Header" />
              <MainPage classname="MainPage" />
            </S.MainPageDiv>
          </Route>
          <Route path="/detail/:postID">
            <S.PostDetailDiv>
              <PostDetail />
            </S.PostDetailDiv>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
