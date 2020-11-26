import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

it(`submit SignIn calls callback`, () => {
  const handleInputChange = jest.fn();
  const wrapper = shallow(<SignIn
    onSubmit={handleInputChange}
  />);

  wrapper.find(`form.login__form`).simulate(`submit`, {
    preventDefault: () => {},
  });
  expect(handleInputChange).toHaveBeenCalledTimes(1);
});
