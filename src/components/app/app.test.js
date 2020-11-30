import React from "react";
import {Router} from "react-router-dom";
import App from "./app";
import browserHistory from "../../brouser-history";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';

configure({adapter: new Adapter()});

let mockState;
beforeEach(() => {
  mockState = {
    USER: {},
    STATE: {},
    DATA: {}
  };
});
it(`Should Main render correctly`, () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockState);
  const wrapper = mount(
      <Provider store={store}>
        <Router history={browserHistory}>
          <App />
        </Router>
      </Provider>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
