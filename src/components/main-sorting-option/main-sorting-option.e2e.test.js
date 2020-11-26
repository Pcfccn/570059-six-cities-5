import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainSortingOption from "./main-sorting-option";
import {SortType} from "../../constants";

configure({adapter: new Adapter()});

it(`Click MainSortingOption calls callback`, () => {
  const handleIClick = jest.fn();
  const wrapper = shallow(<MainSortingOption
    changeType={handleIClick}
    activeSortType={SortType.POPULAR_DESC}
    type={SortType.POPULAR_DESC}
  />);

  wrapper.find(`li.places__option`).simulate(`click`);
  expect(handleIClick).toHaveBeenCalledTimes(1);
});
