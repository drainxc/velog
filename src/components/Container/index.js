import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Mainpage from "../MainPage";
import PostDetail from "../PostDetail";
import * as S from "./styles";

export default function Container() {
  return (
    <>
      <S.ContainerDiv>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header />
              <Mainpage />
            </Route>
            <Route path="/detail/:postID">
              <PostDetail />
            </Route>
          </Switch>
        </BrowserRouter>
      </S.ContainerDiv>
    </>
  );
}
