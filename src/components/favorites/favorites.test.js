import React from "react";
import Favorites from "./favorites";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe(`Favorites`, () => {
  let wrapper;
  it(`Should render correctly`, () => {
    wrapper = shallow(<Favorites />);
    expect(wrapper).toMatchSnapshot();
  });
});
