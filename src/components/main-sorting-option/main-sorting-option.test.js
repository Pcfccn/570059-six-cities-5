import React from "react";
import renderer from "react-test-renderer";
import {SortType} from "../../constants";
import MainSortingOption from "./main-sorting-option";

const noop = () => {};

describe(`MainSortingOption`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
    .create(<MainSortingOption
      activeSortType={SortType.POPULAR_DESC}
      changeType={noop}
      type={SortType.POPULAR_DESC}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
