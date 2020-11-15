import React, {Fragment} from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {AuthorizationStatus, Path} from "../../constants";
import browserHistory from "../../brouser-history";
import Favorites from "../favorites/favorites";
import Main from "../main/main";
import Offer from "../offer/Offer";
import PrivateRoute from "../private-route/private-route";
import SignIn from "../sign-in/sign-in";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path = {Path.MAIN}
          render={() => (
            <Main />
          )
          }
        />
        <PrivateRoute
          exact
          path={Path.SIGN_IN}
          redirectPath={Path.MAIN}
          isAuthorizated={AuthorizationStatus.NO_AUTH}
        >
          <SignIn />
        </PrivateRoute>
        <PrivateRoute
          exact
          path={Path.FAVORITES}
          redirectPath={Path.SIGN_IN}
          isAuthorizated={AuthorizationStatus.AUTH}
        >
          <Favorites />
        </PrivateRoute>
        <Route
          path = {Path.OFFER} exact
          render={(offerProps) => (
            <Offer
              offerProps={offerProps}
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
