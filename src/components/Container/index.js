import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Mainpage from "../MainPage";

export default function container() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Mainpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
