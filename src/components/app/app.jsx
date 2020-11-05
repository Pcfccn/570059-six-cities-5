import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Path} from "../../constants";
import Favorites from "../favorites/favorites";
import Main from "../main/main";
import Offer from "../offer/Offer";
import SignIn from "../sign-in/sign-in";

// const onSubmitForm = (state) => {
const onSubmitForm = () => {
  // console.log(state);
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path = {Path.MAIN}
          render={() => (
            <Main
              onSubmitForm={onSubmitForm}
            />
          )
          }
        />
        <Route exact path = {Path.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path = {Path.FAVORITES}>
          <Favorites />
        </Route>
        <Route
          path = {Path.OFFER} exact
          render={(offerProps) => (
            <Offer
              offerProps={offerProps}
              onSubmitForm={onSubmitForm}
            />
          )
          }
        />
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
