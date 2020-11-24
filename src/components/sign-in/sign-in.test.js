import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "../../brouser-history";
import {SignIn} from "./sign-in";
import {AuthorizationStatus} from "../../constants";


let mockState;
beforeEach(() => {
  mockState = {
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      email: `sdf@mail.ri`
    },
  };
});

it(`Should SignIn render correctly`, () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SignIn
              onSubmit={() => {}}
            />
          </Router>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
