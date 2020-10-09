import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Path} from "../../constants";
import Favorites from "../favorites/favorites";
import Main from "../main/main";
import Offer from "../offer/Offer";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {Path.MAIN}>
          <Main offers={offers} />
        </Route>
        <Route exact path = {Path.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path = {Path.FAVORITES}>
          <Favorites />
        </Route>
        <Route path = {Path.OFFER} exact component = {Offer} />
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

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
