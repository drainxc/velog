import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Mainpage from "../MainPage";
import PostDetail from "../PostDetail";

export default function container() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Mainpage />
          </Route>
          <Route path="/detail/:postID">
              <PostDetail/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
