import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import City from "./city";

configure({adapter: new Adapter()});

it(`Click ItemLink calls callback`, () => {
  const handleItemLinkClick = jest.fn();
  const wrapper = shallow(<City
    thisCity={`Paris`}
    active={true}
    changeCity={handleItemLinkClick}
  />);

  wrapper.find(`a.locations__item-link`).simulate(`click`);
  expect(handleItemLinkClick).toHaveBeenCalledTimes(1);
});
