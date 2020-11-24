import React from "react";
import renderer from "react-test-renderer";
import {SortType} from "../../constants";
import MainSortingOptionsList from "./main-sorting-options-list";

const noop = () => {};

describe(`MainSortingOption`, () => {
  it(`Should render corectly`, () => {
    const tree = renderer
    .create(<MainSortingOptionsList
      activeSortType={SortType.POPULAR_DESC}
      changeType={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
