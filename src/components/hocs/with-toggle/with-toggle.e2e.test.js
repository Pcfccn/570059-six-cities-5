import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withToggle from "./with-toggle";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggle(MockComponent);

it(`Should withToggle eq 0`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().isActive).toEqual(false);
});
