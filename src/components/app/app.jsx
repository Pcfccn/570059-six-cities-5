import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {paths} from "../../constants";
import Favorites from "../favorites/favorites";
import Main from "../main/main";
import Room from "../room/Room";
import SignIn from "../sign-in/sign-in";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {paths.MAIN}>
          <Main />
        </Route>
        <Route exact path = {paths.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path = {paths.FAVORITES}>
          <Favorites />
        </Route>
        <Route path = {paths.ROOM} exact component = {Room} />
        <Route
          render = {() => (
            <Fragment>
              <h1>There`s no page</h1>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
