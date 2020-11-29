import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../constants";
import {Header} from "./header";
import browserHistory from "../../brouser-history";

it(`Should Header render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Header
            authStatus={AuthorizationStatus.AUTH}
            email={`a@await.ne`}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
